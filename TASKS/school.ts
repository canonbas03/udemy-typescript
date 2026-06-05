class School {
  constructor(
    public name: string,
    public foundDate: Date,
    public address: string = "Make it Address later",
    public building: string = "Make it a Building",
    public teachers: string[] = ["We can have teacher class later"],
    public classes: string[] = ["We can have a classes class later"],
  ) {}
}
