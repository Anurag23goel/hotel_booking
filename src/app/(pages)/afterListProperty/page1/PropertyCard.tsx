"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export function PropertyCard({
  icon,
  title,
  description,
}: {
  icon: string,
  title: string,
  description: string,
}) {
  const router = useRouter();

  // const handleClick = () => {
  //   switch (title) {
  //     case 'Apartment':
  //       router.push('/afterListProperty/AppartmentPage');
  //       break;
  //     case 'Homes':
  //       router.push('/afterListProperty/HomesPage');
  //       break;
  //     case 'Hotel, B&Bs & More':
  //       router.push('/afterListProperty/HotelPage');
  //       break;
  //     case 'Alternative Places':
  //       router.push('/afterListProperty/AlternativePage');
  //       break;
  //   }
  // };

  return (
    <div className="p-8 rounded-lg shadow-md flex flex-col items-center text-center h-full justify-between">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img src={icon} alt={title} className="w-16 h-16" />
        </div>
        <h2 className="text-sm font-bold mb-3">{title}</h2>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
      </div>
      <Link
        href={`/afterListProperty/${title.toLowerCase()}`}
        className="bg-[#274905] text-white px-6 py-2 rounded-md hover:bg-[#83a75f] transition-colors w-full mt-auto">
        List your property
      </Link>

    </div>
  );
}