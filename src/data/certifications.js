/**
 * certifications.js
 * ─────────────────────────────────────────────────────────
 * Add a new certification by adding one object to this array.
 *
 * Fields:
 *   id             (required) unique string, no spaces
 *   name           (required) full certification name
 *   issuer         (required) e.g. "Amazon Web Services", "Microsoft"
 *   badgeImage     (required) path to the badge image — put files in
 *                  /public/assets/certs/ and reference as
 *                  "/assets/certs/filename.png"
 *   issueDate      (required) ISO string "YYYY-MM-DD"
 *   expirationDate (optional) ISO string "YYYY-MM-DD" — omit or set to
 *                  null if the cert doesn't expire
 *   verifyUrl      (optional) link to the issuer's public verification page
 *   credentialId   (optional) string, shown if present
 *   skills         (optional) array of strings, shown as small tags
 *   inProgress     (optional) set to true if you're currently studying
 *                  for this one and haven't taken the exam yet. When
 *                  true, issueDate/expirationDate are ignored for
 *                  display — the card shows an "In Progress" tag instead.
 *   examDate       (optional) ISO string "YYYY-MM-DD" — your target
 *                  exam date, shown only when inProgress is true
 *
 * Status (Active / Expiring Soon / Expired / In Progress / no expiration)
 * is computed automatically — you never set it by hand, except via
 * the inProgress flag above.
 */

import awsBadge_ai_practitioner from "../assets/certs/aws-ai-practitioner.png";
import azureBadge_az_900 from "../assets/certs/az900-fundamentals.png";

const certifications = [
  {
    id: "AIF-C01",
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    badgeImage: awsBadge_ai_practitioner,
    issueDate: "2025-11-18",
    expirationDate: "2028-11-18",
    verifyUrl: "https://www.credly.com/badges/ace6eb26-6689-409a-895f-86562fe40cbc/public_url",
    credentialId: "520947229",
    skills: ["AI/ML Concepts", "Foundational Generative AI"],
  },
  {
    id: "az-900",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    badgeImage: azureBadge_az_900,
    issueDate: "2026-07-20",
    expirationDate: null,
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/MarcusUy-4369/C5ABB362F3BA8A?sharingId=5E98AE8A8015FA1A",
    credentialId: "C5ABB362F3BA8A",
    skills: ["Cloud Concepts", "Azure Services"],
  },
];

export default certifications;