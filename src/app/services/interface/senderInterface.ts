export interface SenderInterface {

    setTo(to:string):this;

    send(): boolean;
}