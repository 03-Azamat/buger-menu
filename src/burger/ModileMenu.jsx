/* Local dependencies */
import "./style.scss";

export default function MobileMenu({ className }) {
  const menuList = [
    {
      link: "/",
      name: "Fuel card",
    },
    {
      link: "/advantages",
      name: "Advantages",
    },
    {
      link: "/discount",
      name: "Discount",
    },
    {
      link: "/contacts",
      name: "Contacts",
    },
  ];

  return (
    <div
      className={`mobile-menu ${className} h-[100vh] bg-gray-400 left-0 right-0 absolute z-[5] pt-[120px] flex flex-col justify-center`}
    >
      <div className="mt-[-100px] mx-auto max-w-[700px] flex flex-col justify-center items-center">
        {menuList?.map((link, index) => (
          <div key={index}>
            {link.name && (
              <div className="container">
                <p className="mobile-menu-link font-[spartan,sans-serif]">
                  {link.name}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
