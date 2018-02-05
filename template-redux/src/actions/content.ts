/**
 * @author kozakluke@gmail.com
 */
export const CHANGE_TEXT  = 'CHANGE_TEXT',
             CHANGE_COLOR = 'CHANGE_COLOR';

export function changeText(text:string):ChangeText
{
    return {
        type: CHANGE_TEXT,
        text
    };
}

export function changeColor(color:string):ChangeColor
{
    return {
        type: CHANGE_COLOR,
        color
    };
}

interface ChangeText {
    type:typeof CHANGE_TEXT;
    text:string;
}

interface ChangeColor {
    type:typeof CHANGE_COLOR;
    color:string;
}

export type ContentAction = ChangeText | ChangeColor;
