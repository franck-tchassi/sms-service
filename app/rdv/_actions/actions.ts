"use server";

import { Resend } from "resend";
import { z } from "zod";
import { responseMessages } from "./response-message";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (prevState: { message: string }, formData: FormData) => {
  
  // Si le message a déjà été envoyé avec succès, ne pas envoyer à nouveau
  if (
    prevState.message === responseMessages.success || 
    prevState.message === responseMessages.alreadySend
  ) {
    return { message: responseMessages.alreadySend };
  }
  
  const schema = z.object({
    name: z.string().min(2, { message: "Veuillez entrer un nom valide" }),
    prenom: z.string().min(2, { message: "Veuillez entrer un prénom valide" }),
    email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
    tel: z.string().min(10, { message: "Veuillez entrer un numéro de téléphone valide" }),
    formule: z.string().nonempty({ message: "Veuillez sélectionner un forfait" }),
    message: z.string(),
    date_heure: z
      .string()
      .refine(
        (val) => {
          if (!val) return false;
          const date = new Date(val);
          const hour = date.getHours();
          return hour >= 8 && hour <= 20;
        },
        { message: "L'heure doit être comprise entre 08h00 et 20h00." }
      ),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    prenom: formData.get("prenom"),
    email: formData.get("email"),
    tel: formData.get("tel"),
    formule: formData.get("formule"),
    message: formData.get("message"),
    date_heure: formData.get("date_heure"),
  });

  if (!parse.success) {
    return { message: responseMessages.failed };
  }

  const { name, prenom, email, tel, formule, message, date_heure } = parse.data;

  try {
    // Envoi de l'email via Resend
    await resend.emails.send({
      from: "Noreply <noreply@smsservices.fr>",
      to: ["smsservices84thor@gmail.com"],
      subject: `Nouveau message de ${name} ${prenom}`,
      html: `
        <p><strong>Nom :</strong> ${name} ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${tel}</p>
        <p><strong>Formule :</strong> ${formule}</p>
        <p><strong>Date et Heure :</strong> ${date_heure}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return { message: responseMessages.success };
  } catch (err) {
    console.error("Erreur lors de l'envoi de l'email:", err);
    return { message: responseMessages.failed };
  }
};


