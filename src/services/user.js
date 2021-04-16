import { post } from "./Api";

export function sendEmail(data) {
    return post('/post/email', data);
}