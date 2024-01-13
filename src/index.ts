type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
    id: 1,
    name: 'Ray',
    retire: (date: Date) => {
        console.log(date);
    }
}

employee.retire(new Date());