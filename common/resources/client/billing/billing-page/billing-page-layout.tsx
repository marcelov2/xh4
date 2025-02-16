import {useUser} from '../../auth/ui/use-user';
import {Navbar} from '../../ui/navigation/navbar/navbar';
import {ProgressCircle} from '@ui/progress/progress-circle';
import {useAuth} from '../../auth/use-auth';
import {Outlet} from 'react-router-dom';
import {Footer} from '../../ui/footer/footer';
import {StaticPageTitle} from '../../seo/static-page-title';
import {Trans} from '@ui/i18n/trans';
import {Fragment} from 'react';

export function BillingPageLayout() {
  const {user} = useAuth();
  const query = useUser(user!.id, {
    with: ['subscriptions.product', 'subscriptions.price'],
  });

  return (
    <Fragment>
      <StaticPageTitle>
        <Trans message="Billing" />
      </StaticPageTitle>
      <Navbar menuPosition="billing-page" />
      <div className="flex flex-col">
        <div className="container mx-auto my-24 flex-auto px-24">
          {query.isLoading ? (
            <ProgressCircle
              className="my-80"
              aria-label="Loading user.."
              isIndeterminate
            />
          ) : (
            <Outlet />
          )}
        </div>
        <Footer className="container mx-auto px-24" />
      </div>
    </Fragment>
  );
}
