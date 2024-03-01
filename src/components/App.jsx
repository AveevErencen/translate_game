import React, { useState } from 'react';
import NavBar from './ui/NavBar';

export default function App({ children, user, initState }) {
  return (
    <>
      <NavBar initState={initState} user={user} />
      <div className="divApp">
        {children}
      </div>
    </>
  );
}
// export default function App({ children, user, initState }) {
//   const [currentUser, setCurrentUser] = useState(user);
//   // Создаем новый массив дочерних элементов с добавленными пропсами
//   const childrenWithProps = React.Children.map(children, (child) =>
//     React.cloneElement(child, { user, initState, setCurrentUser }),
//   );
//   return (
//     <>
//       <NavBar initState={initState} user={currentUser} />
//       <div className="divApp">{childrenWithProps}</div>
//     </>
//   );
// }
