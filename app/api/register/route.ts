import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import bcrypt from "bcryptjs";

// Fonction POST pour enregistrer un utilisateur
export async function POST(req: Request) {
  try {
    // Extraction du corps de la requête
    const body = await req.json();
    const { email, password } = body;

    // Vérification des données manquantes
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 } // Utilisez le statut 400 pour une mauvaise requête
      );
    }

    // Vérifier si l'utilisateur existe déjà
    const userAlreadyExist = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 } // Statut 409 pour conflit
      );
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Création du nouvel utilisateur dans la base de données
    const newUser = await prisma.user.create({
      data: {
        email: email,
        hashedPassword: hashedPassword,
      },
    });

    // Retourner une réponse de succès avec les informations de l'utilisateur
    return NextResponse.json(newUser, { status: 201 }); // Statut 201 pour une création réussie

  } catch (err) {
    console.error("REGISTER_ERR", err);
    return NextResponse.json(
      { error: "Internal server error"},
      { status: 500 } // Statut 500 pour une erreur serveur
    );
  }
}
