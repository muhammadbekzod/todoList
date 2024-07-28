let dataList = [];

const AddNewMotor = (req, res) => {
  const { name, age } = req.body;
  dataList.push({ name, age });
  console.log(`Add new name: ${name}, age:${age}`);
  res.status(201).json({ message: "Data received", name, age });
};

const GetAllMotorData = (req, res) => {
  res.status(200).json(dataList);
};

const EditMotor = (req, res) => {
  const { name } = req.params;
  const { newName, newAge } = req.body;
  const motor = dataList.find((motor) => motor.name === name);

  if (motor) {
    motor.name = newName || motor.name;
    motor.age = newAge || motor.age;
    console.log(
      ` Edited name: ${name} to new name: ${motor.name}, new age: ${motor.age}`
    );
    res.status(200).json({ message: "Data updated", motor });
  } else {
    res.status(404).json({ message: "Motor not found" });
  }
};

const DeleteMotor = (req, res) => {
  const { name } = req.params;
  const index = dataList.findIndex((motor) => motor.name === name);

  if (index !== -1) {
    const deletedMotor = dataList.splice(index, 1);
    console.log(`Deleted name: ${name}`);
    res.status(200).json({ message: "Data deleted", deletedMotor });
  } else {
    res.status(404).json({ message: "Motor not found" });
  }
};

module.exports = { AddNewMotor, GetAllMotorData, EditMotor, DeleteMotor };
