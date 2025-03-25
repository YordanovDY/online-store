import { Link } from 'react-router';

export default function Dashboard() {
   return (
      <section className="padding-20 d-flex f-direction-column gap-30">
         <h2 className="fancy-header">Dashboard</h2>
         <div className="d-flex f-direction-column gap-20">
            <article className="d-flex f-direction-column gap-10">
               <h4 className="header-saparator">STORE MANAGER</h4>
               <div className="d-flex gap-20">
                  <Link className="tile-button">Create Product</Link>
                  <Link className="tile-button">Product Managment</Link>
                  <Link className="tile-button">Orders Processing</Link>
               </div>
            </article>

            <article className="d-flex f-direction-column gap-10">
               <h4 className="header-saparator">SUPPLIER</h4>
               <div className="d-flex gap-20">
                  <Link className="tile-button">Delivery Managment</Link>
               </div>
            </article>

            <article className="d-flex f-direction-column gap-10">
               <h4 className="header-saparator">ADMIN</h4>
               <div className="d-flex gap-20">
                  <Link to="/dashboard/create-profile" className="tile-button">Create Profiles</Link>
               </div>
            </article>
         </div>
      </section>
   );
}