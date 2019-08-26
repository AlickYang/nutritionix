const MatchDateToTab = dateSelected => {
  const TabSize = 2;
  let index;
  dateSelected === 0 ? (index = TabSize) : (index = dateSelected % TabSize);
  return index;
};

export default MatchDateToTab;
