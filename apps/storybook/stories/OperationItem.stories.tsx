import Desert from '../../../assets/desert.png';
import img from '../../../assets/Avatar.png';
import { OperationItem } from '../../../components/OperationItem/src';
import { Badge } from '../../../components/Badge/src';
import { Chip } from '../../../components/Chip/src';
import { Previews } from '../../../components/Previews/src';

export default {
    title: 'Compositions/OperationItem',
    component: OperationItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export const Main = {
    args: {
        previews: <Previews images={[img, img, img, img]} />,
        badge: <Badge color="success" label="Success" />,
        chips: [
            <Chip image={Desert} label="Desert" maxWidth={100} />,
            <Chip image={Desert} label="Desert" maxWidth={100} />,
            <Chip image={Desert} label="Very long label here" maxWidth={100} />,
        ],
        date: '15 mins ago',
        unread: true,
        title: 'Operation',
    },
};

export const WithProgress = {
    args: {
        previews: <Previews images={[img, img, img, img]} />,
        badge: <Badge color="info" label="In progress" />,
        chips: [
            <Chip image={Desert} label="Desert" maxWidth={100} />,
            <Chip image={Desert} label="Desert" maxWidth={100} />,
            <Chip image={Desert} label="Very long label here" maxWidth={100} />,
        ],
        date: '15 mins ago',
        unread: true,
        title: 'Operation',
        progress: 0.33,
    },
};
