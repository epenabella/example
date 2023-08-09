type Props = {
     text: string;
     onClick?: string;
     href?: string;
     icon?: React.ReactNode;
   };

export const PrimaryLinkButton = ({...props}:Props) => 
<a
  className="inline-flex justify-center items-center gap-x-3 text-center bg-volvo-blue-light hover:bg-volvo-blue border border-transparent text-xs sm:text-sm  lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue-light focus:ring-offset-2 focus:ring-offset-white transition px-3 py-2 sm:py-3 sm:px-4  dark:focus:ring-offset-gray-800"
  href={props.href ?? "#"}
>
  {props.text}
  {props.icon}
</a>
