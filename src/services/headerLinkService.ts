import { Subject } from "rxjs";

const subject = new Subject();

export const headerLinkService = {
  setData: (data: string) => {
    subject.next({ value: data });
    console.log({ data });
  },
  clearData: () => subject.next(),
  getData: () => subject.asObservable(),
};
