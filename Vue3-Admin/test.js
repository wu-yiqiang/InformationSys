function spli() {
  let obj = {
    dei: "===",
    filedList: [1,2,3,4,5,5,6,76],
    options: [1,2,3,4,5,5,6,7,7],
    optionsind: 11,
    proJbruserValue: "1",
    relateType: "表关联键",
    sourceCol: "emp",
    sourceColId: "1001cac92ce4225dac008d0acbc741f5",
    sourceId: "1",
    stable: "1001cac92ce4225dac008d0acbc741f5",
    symbol: "607786d8fb7246aa8f619ed83a854fe5",
    targetCol: "ID",
    targetColId: "607786d8fb7246aa8f619ed83a854fe5",
    targetId: "101004dac84a067a821cf1f646fb352f",
    xh: 1,
    }
    
  for (attr in obj) {
    switch (attr) { 
        case 'filedList':
    delete obj.filedList
        case 'relateType':
    delete obj.relateType
  }
    }
  console.log(obj)
}
spli()