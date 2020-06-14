export interface IProps {
    position: number
}
export const DefaultProps:IProps = {
    position : (new Date()).getTime()/1000,
};
