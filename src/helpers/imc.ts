export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  { title: "Thinness", color: "#96A3AB", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.6, 24.9] },
  { title: "Overweight", color: "#E2B039", icon: "down", imc: [25, 30] },
  { title: "Obesity", color: "#C3423F", icon: "down", imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
  const imcCalc = weight / (height * height);

  for (let i in levels) {
    if (imcCalc >= levels[i].imc[0] && imcCalc < levels[i].imc[1]) {
      let levelCopy: Level = { ...levels[i] };
      levelCopy.yourImc = Number(imcCalc.toFixed(2));
      return levelCopy;
    }
  }
  return null;
};
