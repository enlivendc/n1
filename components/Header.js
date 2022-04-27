import Link from 'next/link'
const Header = ({menuItems}) => { 
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg">
      <ul className="flex items-center justify-end flex-grow w-full">
     
        {menuItems?.edges.map((item) => (
          <li key={item.node.path}>
          <Link href={item.node.path}>
            <a className="p-4 ml-2 text-white hover:underline"  href={item.node.path}>
              {item.node.label}
            </a>
            </Link> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;