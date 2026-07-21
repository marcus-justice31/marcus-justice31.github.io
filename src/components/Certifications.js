import certifications from "../data/certifications";
import "../styles/Certifications.css";

const EXPIRING_SOON_WINDOW_DAYS = 90;

/**
 * Computes { label, className } for a cert based on its dates.
 * Kept as a plain function (not per-card state) since status is
 * derived entirely from data — nothing here needs to be interactive.
 */
function getCertStatus(cert) {
  if (cert.inProgress) {
    return { label: "In Progress", className: "status-in-progress" };
  }

  if (!cert.expirationDate) {
    return { label: "Active · No Expiration", className: "status-active" };
  }

  const today = new Date();
  const expiration = new Date(cert.expirationDate);
  const daysUntilExpiration = Math.ceil(
    (expiration - today) / (1000 * 60 * 60 * 24)
  );

  if (daysUntilExpiration < 0) {
    return { label: "Expired", className: "status-expired" };
  }

  if (daysUntilExpiration <= EXPIRING_SOON_WINDOW_DAYS) {
    return { label: "Expiring Soon", className: "status-expiring" };
  }

  return { label: "Active", className: "status-active" };
}

function formatDate(dateString) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

function CertCard({ cert }) {
  const status = getCertStatus(cert);
  const isExpired = status.className === "status-expired";

  return (
    <div className={`cert-card ${isExpired ? "cert-card--expired" : ""}`}>
      <div className="cert-badge-wrapper">
        <img
          src={cert.badgeImage}
          alt={`${cert.name} badge`}
          className="cert-badge-image"
        />
      </div>

      <div className="cert-body">
        <div className="cert-heading">
          <h4>{cert.name}</h4>
          <span className={`cert-status ${status.className}`}>
            {status.label}
          </span>
        </div>

        <p className="cert-issuer">{cert.issuer}</p>

        <div className="cert-dates">
          {cert.inProgress ? (
            cert.examDate && <span>Targeting {formatDate(cert.examDate)}</span>
          ) : (
            <>
              <span>Issued {formatDate(cert.issueDate)}</span>
              {cert.expirationDate && (
                <span>· Expires {formatDate(cert.expirationDate)}</span>
              )}
            </>
          )}
        </div>

        {cert.skills?.length > 0 && (
          <div className="cert-skills">
            {cert.skills.map((skill) => (
              <span key={skill} className="cert-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}

        {!cert.inProgress && (
          <div className="cert-footer">
            {cert.credentialId && (
              <span className="cert-credential-id">ID: {cert.credentialId}</span>
            )}
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify-link"
              >
                Verify →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const Certifications = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="certifications-section" id="certifications">
      <div className="certifications-header">
        <h3>Certifications</h3>
        <p>Credentials I've earned and keep current.</p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;