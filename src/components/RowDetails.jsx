import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon } from '@heroicons/react/24/solid';

export default function RowDetails({
  _id,
  name,
  surname,
  email,
  type,
  birthday,
  salary,
  OnDelete,
}) {
  return (
    <tr className="bg-gray-50 text-center odd:bg-gray-200">
      <td className="px-4 py-6">
        <span>{name || 'Unknown'}</span>
      </td>
      <td className="px-4 py-6">
        <span>{surname || 'Unknown'}</span>
      </td>
      <td className="">
        <span>{email || 'Unknown'}</span>
      </td>
      <td className="px-4 py-6">
        <span>{type || 'Unknown'}</span>
      </td>
      <td className="px-4 py-6">
        <span>{birthday || 'Unknown'}</span>
      </td>
      <td className="px-4 py-6">
        <span>{salary || 'Unknown'}</span>
      </td>
      <td className="px-4 py-6">
        <div className="flex justify-around">
          <Link to={`/${_id}`}>
            <PencilSquareIcon className="h-6 w-6 text-blue-500 hover:cursor-pointer" />
          </Link>
          <TrashIcon
            className="h-6 w-6 text-red-500 hover:cursor-pointer"
            onClick={() => OnDelete(_id)}
          />
        </div>
      </td>
    </tr>
  );
}
