import { redirect } from 'next/navigation';
import { RedirectType } from 'next/dist/client/components/redirect-error';
import { ROUTES } from '@/constants/routes';

export default function NotFound() {
  return redirect(ROUTES.EMPLOYERS(), RedirectType.replace);
}
