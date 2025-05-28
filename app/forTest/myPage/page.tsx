export default function Example() {
  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];
  return (
    <>
      <main className="relative overflow-hidden isolate bg-red-600 py-24 sm:py-32">
        <img
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="for test"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          {/* Titles */}
          <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
            <h1 className="text-white text-6xl font-bold mb-8">Work with us</h1>
            <p className="text-gray-300 font-medium text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
          {/* Links */}
          <div className="mx-auto lg:mx-0 max-w-2xl mb-15">
            <div className="grid grid-cols-1  gap-x-8 gap-y-6 sm:grid-cols-2 lg:flex font-black text-gray-200 text-base">
              {links.map((ele, i) => (
                <a href={ele.href} key={i} className="">
                  {ele.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
          {/* boxes */}
          <dl className="mx-auto lg:mx-0 lg:max-w-full max-w-2xl grid gap-x-5 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white font-bold">
            {stats.map((ele, i) => (
              <div key={i} className="flex flex-col">
                <dt className="text-5xl font-black mb-3">{ele.value}</dt>
                <dd className="text-gray-300">{ele.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg className="h-6 w-6 stroke-white" >
        {/* ... */}
      </svg>
    </span>
  </div>
  <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>

    </>
  );
}
