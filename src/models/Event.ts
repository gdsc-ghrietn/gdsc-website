export type EventFromList = {
    id: string;
};

export enum AudienceType {
    IN_PERSON = "IN_PERSON",
    VIRTUAL = "VIRTUAL",
    HYBRID = "HYBRID",
}

export type Ticket = {
    id: number;
    price: number;
};

export type Speaker = {
    id: number;
    first_name: string;
    last_name: string;
    company?: string;
    title?: string;
    bio?: string;
    picture?: {url: string;}; // dimensions unknown for now
    personal_twitter?: string;
}

export type Event = {
    id: string;
    title: string;
    description: string;
    description_short: string;
    audience_type: AudienceType;
    picture: {url: string;}; // dimensions 400x400
    start_date: Date;
    end_date: Date;
    tags: string[];
    tickets: Ticket[];
    url: string;
    venue_name: string;
    venue_address: string;
    venue_city: string;
    venue_state: string;
    venue_country: string;
    speakers?: Speaker[];
};

