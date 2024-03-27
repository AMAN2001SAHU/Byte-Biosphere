import { AppBar } from './Appbar';
import { Avatar } from './Avatar';

interface ContentProp {
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string | null;
  };
  id: string;
}

export const Content = ({ title, content, createdAt, author }: ContentProp) => {
  let nameArr: string[];
  if (author.name === null) {
    nameArr = ['User'];
  } else {
    nameArr = author.name.split(' ');
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-12 grid-cols-1 px-10 w-full mt-4 md:max-w-2xl lg:max-w-6xl max-w-xl gap-5">
          <div className="lg:col-span-8 ">
            <div className="font-bold text-4xl ">{title}</div>
            <div className="mt-1 font-light">
              Posted on {extractedDate(createdAt)}
            </div>
            <div className="flex flex-col ">
              <div className="mt-3 overflow-hidden">{content}</div>
            </div>
          </div>
          <div className="lg:col-span-4 mb-5">
            <div className="font-bold text-lg ">
              <div className="font-light">Author</div>
              <div className="flex gap-2 items-center mt-2">
                <div>
                  <Avatar
                    intials={`
              ${
                nameArr.length > 1
                  ? `
                    ${nameArr[0].charAt(0).toUpperCase()}
                    ${nameArr[1].charAt(0).toUpperCase()}
                    `
                  : `${nameArr[0].charAt(0).toUpperCase()}`
              }
              `}
                  />
                </div>
                <div>{author.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function extractedDate(createdAt: string): string {
  const date = new Date(createdAt);
  const monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const year: number = date.getFullYear();
  const monthIndex: number = date.getMonth();
  const day: number = date.getDate();

  const monthName: string = monthNames[monthIndex];

  return `${day.toString().padStart(2, '0')} ${monthName}, ${year}`;
}

// function extract() {
//   return (
// <div className="flex justify-center">
//   <div className="grid grid-cols-12 px-10 w-full mt-4 max-w-xl lg:max-w-6xl gap-5">
//     <div className="col-span-8 ">
//       <div className="font-bold text-4xl ">{title}</div>
//       <div className="mt-1 font-light">
//         Posted on {extractedDate(createdAt)}
//       </div>
//       <div className="flex flex-col bg-yellow-200">
//         <div className="mt-3">{content}</div>
//       </div>
//     </div>
//     <div className="col-span-4">
//       <div className="font-bold text-lg ">
//         <div className="font-light">Author</div>
//         <div className="flex gap-2 items-center mt-2">
//           <div>
//             <Avatar
//               intials={`
//           ${
//             nameArr.length > 1
//               ? `
//                 ${nameArr[0].charAt(0).toUpperCase()}
//                 ${nameArr[1].charAt(0).toUpperCase()}
//                 `
//               : `${nameArr[0].charAt(0).toUpperCase()}`
//           }
//           `}
//             />
//           </div>
//           <div>{author.name}</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// }
