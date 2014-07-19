class Team {
    Location: string;
    Nickname: string;
    Abbreviation: string;
    ByeWeek: number;
    Logo: string;

    get FullName() {
        return this.Location + " " + this.Nickname;
    }
}
export = Team;