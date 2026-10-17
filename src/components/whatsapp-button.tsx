import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site';

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={site.socials.WhatsApp}
      aria-label="Chat with us on WhatsApp at +976 85151075"
      title="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
