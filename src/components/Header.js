
/* This example requires Tailwind CSS v2.0+ */
export default function Header({heading}) {
    return (
      <div className="px-4 py-4 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{heading}</h2>
        </div>
      </div>
    )
  }
  