"use server";

import { Resend } from "resend";
import { z } from "zod";
import { responseMessages } from "./response-message";

const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction pour formater la date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

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
    service: z.string().min(1, {message: "service requis"}),
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
    service: formData.get("service"),
    formule: formData.get("formule"),
    message: formData.get("message"),
    date_heure: formData.get("date_heure"),
  });

  if (!parse.success) {
    return { message: responseMessages.failed };
  }

  const { name, prenom, email, tel, service, formule, message, date_heure } = parse.data;

  // Formater la date avant de l'utiliser dans l'email
  const formattedDate = formatDate(date_heure);

  try {
    // Envoi de l'email via Resend
    await resend.emails.send({
      from: "Noreply <noreply@smsservices.fr>",
      to: ["smsservices84thor@gmail.com"],
      subject: `Nouveau message de ${name} ${prenom}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0056b3;">Nouveau message de prise de rendez-vous</h2>
          <p><strong>Nom :</strong> ${name} ${prenom}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}" style="color: #0056b3; text-decoration: none;">${email}</a></p>
          <p><strong>Téléphone :</strong> <a href="tel:${tel}" style="color: #0056b3; text-decoration: none;">${tel}</a></p>
          <p><strong>Service :</strong> ${service}</p>
          <p><strong>Formule :</strong> ${formule}</p>
          <p><strong>Date et Heure :</strong> ${formattedDate}</p>
          <p><strong>Message :</strong></p>
          <div style="padding: 10px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px;">
            ${message}
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <footer style="text-align: center; font-size: 12px; color: #666;">
            <p>Vous avez reçu ce message via le formulaire de prise de rendez-vous.</p>
          </footer>
        </div>
      `,
    });

    return { message: responseMessages.success };
  } catch (err) {
    console.error("Erreur lors de l'envoi de l'email:", err);
    return { message: responseMessages.failed };
  }
};



