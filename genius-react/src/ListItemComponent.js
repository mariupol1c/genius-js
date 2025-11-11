const ListItemComponent = (props) => {
  return (
    <li key={props.index}>
      {props.index} {props.element}
    </li>
  );
};

export default ListItemComponent;
