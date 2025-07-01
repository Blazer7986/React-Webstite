function Food() {
  const food1 = 'Strawberry';
  const food2 = 'Kiwi';

  return (
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;