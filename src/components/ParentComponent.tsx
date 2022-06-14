import * as React from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

interface IParentComponentProps {}

const ParentComponent: React.FunctionComponent<IParentComponentProps> = (
  props
) => {
  const [age, setAge] = React.useState<number>(20);
  const [salary, setSalary] = React.useState<number>(23000);

  const incrementAge = React.useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = React.useCallback(() => {
    setSalary(salary + 4000);
  }, [salary]);
  return (
    <>
      <Title />
      <Count data-testid="ageBtn" text="age" count={age} />
      <Button
        testid="agehandle"
        handleClick={incrementAge}
        text="Increment Age"
      />
      <Count text="salary" count={salary} />
      <Button
        testid="salaryhandle"
        handleClick={incrementSalary}
        text="Increment Salary"
      />
    </>
  );
};

export default ParentComponent;
