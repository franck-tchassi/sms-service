


"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async ( formData: FormData) => {
  const name = formData.get("name") as string;
  const prenom = formData.get("prenom") as string;
  const tel = formData.get("tel") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const service = formData.get("service") as string;
  const formule = formData.get("formule") as string;
  const date_heure = formData.get("date_heure") as string;

  try {
    const {  error } = await resend.emails.send({
      from: "smsservices84thor@gmail.com",
      to: ["smsservices84thor@gmail.com"],
      subject: "Nouvelle demande de rendez-vous",
      html: `
        <p>Nom: ${name}</p>
        <p>Prénom: ${prenom}</p>
        <p>Téléphone: ${tel}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Service: ${service}</p>
        <p>Formule: ${formule}</p>
        <p>Date et Heure souhaitée: ${date_heure}</p>
      `,
    });

    if (error) {
      return { message: "Erreur lors de l'envoi du message" };
    }

    return { message: "Message envoyé avec succès" };
  } catch (error) {
    return { message: "Erreur lors de l'envoi du message", error };
  }
};
