// import EditorJS, { OutputData } from '@editorjs/editorjs';
// import { memo, useEffect, useRef } from 'react';
// import Header from '@editorjs/header';

// type Props = {
//   data?: OutputData;
//   onChange(val: OutputData): void;
//   holder: string;
// };

// const EditorBlock = ({ data, onChange, holder }: Props) => {
//   const ref = useRef<EditorJS>();

//   useEffect(() => {
//     if (!ref.current) {
//       const editor = new EditorJS({
//         holder: holder,
//         tools: {
//           header: Header,
//         },
//         data,
//         async onChange(api, event) {
//           const data = await api.saver.save();
//           onChange(data);
//         },
//       });
//       ref.current = editor;
//     }

//     //add a return function handle cleanup
//     return () => {
//       if (ref.current && ref.current.destroy) {
//         ref.current.destroy();
//       }
//     };
//   }, []);

//   return <div id={holder} />;
// };

// export default EditorBlock;

// export const EditorComponent = () => {
//   const ejInstance = useRef<EditorJS>();

//   const initEditor = () => {
//     const editor = new EditorJS({
//       holder: 'editorjs',
//       onReady: () => {
//         ejInstance.current = editor;
//       },
//       autofocus: true,
//       onChange: async () => {
//         const content = await editor.saver.save();
//         console.log(content);
//       },
//     });
//   };

//   useEffect(() => {
//     if (ejInstance.current === null) {
//       initEditor();
//     }

//     return () => {
//       ejInstance.current.destroy();
//     };
//   }, []);

//   return <div id="editorjs"></div>;
// };
