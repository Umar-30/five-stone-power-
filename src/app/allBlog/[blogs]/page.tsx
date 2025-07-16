'use client';
import { usePathname } from 'next/navigation';
import { Blog1, Blog2, Blog3, Blog4, Blog5, Blog6 } from "../../components/blog";

export default function DynamicBlog() {
  const pathname = usePathname(); // e.g. /components/1
  const segments = pathname.split('/');
  const id = segments[2]; // because ['', 'components', '1']

  const renderBlog = () => {
    switch (id) {
      case '1':
        return <Blog1 />;
      case '2':
        return <Blog2 />;
      case '3':
        return <Blog3 />;
      case '4':
        return <Blog4 />;
      case '5':
        return <Blog5 />;
      case '6':
        return <Blog6 />;
      default:
        return <p>Blog not found</p>;
    }
  };

  return (
    <div className="min-h-screen py-10 px-4">
      {renderBlog()}
    </div>
  );
}
