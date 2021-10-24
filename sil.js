
function wizard() {
    let students = [
      "Joyce",
      "Azael",
      "Sezai",
      "Amit",
      "Sara",
      "Tony",
      "Cindy",
      "Elias",
      "Muhanad",
      "Mohammed",
      "Laura",
      "Thomas",
      "Ahmmed.F",
      "Aneudy",
      "Olha",
      "Mami",
      "Eniko",
      "Christin",
      "Luke",
      "Adrian",
      "Muhasin",
      "Ines",
    ];
    const group1 = [];
    const group2 = [];
    const group3 = [];
    const group4 = [];
  
    const groupSize = 6;
    const genRandomNum = () => Math.floor(Math.random() * students.length);
    for (let i = 0; i < students.length; i++) {
      if (group1.length < groupSize) {
        let rInx = genRandomNum();
        group1.push(students[rInx]);
        students = students.filter((i) => i != students[rInx]);
      }
      if (group2.length < groupSize) {
        let rInx = genRandomNum();
        group2.push(students[rInx]);
        students = students.filter((i) => i != students[rInx]);
      }
      if (group3.length < groupSize) {
        let rInx = genRandomNum();
        group3.push(students[rInx]);
        students = students.filter((i) => i != students[rInx]);
      }else {
        let rInx = genRandomNum();
        group4.push(students[rInx]);
        students = students.filter((i) => i != students[rInx]);
      }
    }
    return {
      Group1: group1,
      Group2: group2,
      Group3: group3,
      Group4: group4.concat(students),
    };
  }
  
  const groups = wizard();
  
  const renderTemplate = Object.keys(groups)
    .map((group) => {
      return (
        group.toLocaleUpperCase() +
        ": " +
        "\n" +
        groups[group].map((i, idx) => ` ${idx + 1}- ${i}`).join("\n") +
        "\n" +
        "------------------------"
      );
    })
    .join("\n");
  
  console.log(renderTemplate);       