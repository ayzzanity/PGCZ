import { Avatar, Button, Card, Progress, Space, Typography } from "antd";
import { UserOutlined, InfoCircleOutlined, TeamOutlined } from "@ant-design/icons";

const { Text } = Typography;
const TrainerCard = () => {
  return (
    <Space direction="vertical">
      <Space size={16}>
        <Button
          size="large"
          style={{ whiteSpace: "normal", height: "3rem" }}
          icon={<InfoCircleOutlined />}
          className="text-white bg-zinc-700 border-transparent"
        >
          WHAT'S NEW
        </Button>
        <Button
          size="large"
          style={{ whiteSpace: "normal", height: "3rem" }}
          className="text-white bg-zinc-700 border-transparent"
        >
          EDIT »
        </Button>
        <Button
          size="large"
          icon={<TeamOutlined />}
          style={{ whiteSpace: "normal", height: "3rem" }}
          className="text-white bg-zinc-700 border-transparent "
        >
          HANDSHAKE
          <div className="-mt-1 ml-9 text-white text-xxxs uppercase">WITH ANOTHER TRAVELLER »</div>
        </Button>
        <Button
          size="large"
          style={{ whiteSpace: "normal", height: "3rem" }}
          className="text-white bg-zinc-700 border-transparent"
        >
          LOGOUT
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Card
          // hoverable
          className="text-white bg-zinc-800 border-transparent w-720px"
          cover={<img alt="example" src="https://assets.thesilphroad.com/img/card-covers/scene-7.png" />}
        >
          <Avatar
            size={72}
            icon={<UserOutlined />}
            src="https://assets.thesilphroad.com/img/user-avatars/juniorscout_m_2.png"
            className="border-4 rounded-full border-sky-500 bg-orange-200"
          />

          <p>
            <Text className="font-bold text-amber-300 text-sm uppercase">Junior Scout</Text>
          </p>
          <p>
            <Text className="font-bold text-white text-2xl uppercase">AyzEyesIce</Text>
          </p>
          <p>
            <Text className="text-stone-400 text-xs uppercase">Zamboanga City</Text>
          </p>
          <p>
            <Text className="font-bold text-white text-xs uppercase">Level: </Text>
            <Text className="text-stone-400 text-base uppercase">44 </Text>
            <Text className="font-bold text-white text-xs uppercase">XP: </Text>
            <Text className="text-stone-400 text-base uppercase">38,937,608</Text>
          </p>
          <p className="text-left">
            <Text className="font-bold text-white text-sm uppercase">Favorite </Text>
            <Text className="text-white text-sm uppercase">Pokémon</Text>
          </p>
          <Space direction="row">
            <Card
              type="inner"
              className="w-24 bg-stone-900 text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/6.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-stone-900 text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/94.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-stone-900 text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/334.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-stone-900 text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/marowak-alola.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-stone-900 text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/249.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-stone-900 text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/384.png" />}
            ></Card>
          </Space>
          <div className="flex">
            <div className="w-1/3">
              <div className="text-right w-1/2 -mt-5">
                <Text className="font-bold text-white text-xs uppercase">Home</Text>
              </div>
              <div className="text-right w-1/2 -mt-2">
                <Text className="text-white text-xs uppercase">COMMUNITY</Text>
              </div>
              <div className="-mt-8 text-center -mr-10">
                <Avatar
                  size={26}
                  icon={<UserOutlined />}
                  src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.15752-9/371523361_372384818551169_3650795025273036162_n.png?stp=dst-png_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=61f064&_nc_eui2=AeHqFRyViHhDENq5St5sQvkV9HBkVxOxvzX0cGRXE7G_NSN0Rcaid-H4cGnDRSM44_M&_nc_ohc=xjscrHEX1eYAX-wYhWl&_nc_ht=scontent.fmnl25-1.fna&oh=03_AdS9UkW0gVfI_Gd9RtjRhLJJp1M-F2DRIF4PC1392Pik8A&oe=658C091A"
                  className="border-2 rounded-full border-gray-500 bg-orange-200"
                />
              </div>
            </div>
            <div className="w-2/3 flex text-left -mt-3.5">
              <Text className="w-2/6 font-bold text-white text-xs uppercase mt-1">Pokédex</Text>
              <Progress
                strokeColor="white"
                trailColor="gray"
                strokeLinecap="round"
                size="small"
                status="active"
                format={() => (
                  <>
                    <p className="font-bold text-white text-xxs">691</p>
                    <p className="text-white text-xxs -mt-2 -ml-0.5">_____</p>
                    <p className="font-bold text-white text-xxs">795</p>
                  </>
                )}
                className="w-full border-gray-500 border-2 rounded-full bg-stone-500 -ml-5"
                percent={(691 / 795) * 100}
              />
            </div>
          </div>
          <div class="flex ...">
            <div class="w-1/2 ... ">w-1/2</div>
            <div class="w-1/2 ... ">w-1/2</div>
          </div>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </Space>
  );
};
export default TrainerCard;
