class Event {
    constructor(title, description, startDate, endDate, 
    location, organisation, thumbnail) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.organisation = organisation;
        this.thumbnail = thumbnail;
    }
}

export default Event;