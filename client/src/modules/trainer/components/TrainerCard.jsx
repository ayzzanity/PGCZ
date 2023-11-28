import { Avatar, Button, Card, Divider, Image, Progress, Space, Typography } from "antd";
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
          className="text-white bg-silph-btn border-transparent"
        >
          WHAT'S NEW
        </Button>
        <Button
          size="large"
          style={{ whiteSpace: "normal", height: "3rem" }}
          className="text-white bg-silph-btn border-transparent"
        >
          EDIT »
        </Button>
        <Button
          size="large"
          icon={<TeamOutlined />}
          style={{ whiteSpace: "normal", height: "3rem" }}
          className="text-white bg-silph-btn border-transparent "
        >
          HANDSHAKE
          <div className="-mt-1 ml-9 text-white text-xxxs uppercase">WITH ANOTHER TRAVELLER »</div>
        </Button>
        <Button
          size="large"
          style={{ whiteSpace: "normal", height: "3rem" }}
          className="text-white bg-silph-btn border-transparent"
        >
          LOGOUT
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Card
          // hoverable
          className="text-white bg-silph-black border-transparent w-720px"
          cover={
            <div className="bg-center overflow-hidden h-28">
              <Image
                preview={false}
                alt="example"
                src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F598665%2Fpokemon-go.jpg"
              />
            </div>
          }
        >
          <Avatar
            size={96}
            icon={<UserOutlined />}
            src="https://i.imgur.com/RJdTl2Z.png"
            className="-mt-32 border-4 rounded-full border-sky-500 bg-orange-200"
          />
          <div className="flex -mt-11">
            <div className="w-1/2 text-left">
              <Text className="font-bold text-white text-xxs uppercase -ml-4">Pokemon GO Club Zamboanga</Text>
            </div>
            <div className="w-1/2 text-right">
              <Text className="font-bold text-white text-xxs uppercase -mr-4">4234 6895 4035</Text>
            </div>
          </div>
          <div className="mt-5">
            <Text className="font-bold text-amber-300 text-sm uppercase">Lazy Wayfarer</Text>
          </div>
          <div>
            <Text className="font-bold text-white text-3xl uppercase">AyzEyesIce</Text>
          </div>
          <div>
            <Text className="text-stone-400 text-xs uppercase">Team Mystic</Text>
          </div>
          <div>
            <Text className="font-bold text-white text-xs uppercase">Level: </Text>
            <Text className="text-stone-400 text-base uppercase">44 </Text>
            <Text className="font-bold text-white text-xs uppercase">XP: </Text>
            <Text className="text-stone-400 text-base uppercase">99,999,999</Text>
          </div>
          <div className="text-left">
            <Text className="font-bold text-white text-sm uppercase">Favorite </Text>
            <Text className="text-white text-sm uppercase">Pokémon</Text>
          </div>
          <Space direction="row">
            <Card
              type="inner"
              className="w-24 bg-silph-black text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/6.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-silph-black text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/94.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-silph-black text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/448.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-silph-black text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/marowak-alola.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-silph-black text-white border-transparent rounded-none h-3/4"
              cover={<img alt="example" src="https://assets.thesilphroad.com/img/pokemon/icons/96x96/197.png" />}
            ></Card>
            <Card
              type="inner"
              className="w-24 bg-silph-black text-white border-transparent rounded-none h-3/4"
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
          <div class="flex">
            <div class="w-1/3 m-0.5">
              <div className="bg-silph-gray text-white border-transparent rounded-none">
                <Image
                  className="mt-2"
                  width={25}
                  preview={false}
                  src="https://assets.thesilphroad.com/img/icons/mind_map_filled.png"
                />
                <div>
                  <Text className="font-bold text-white text-xs uppercase">TRAVELERS MET:</Text>
                </div>
                <div>
                  <Text className="font-bold text-orange-500 text-lg uppercase">999</Text>
                </div>
              </div>
            </div>
            <div class="w-1/3 m-0.5">
              <div className="bg-silph-gray text-white border-transparent rounded-none">
                <Image
                  className="invert mt-2"
                  width={25}
                  preview={false}
                  src="https://assets.thesilphroad.com/img/icons/Place.png"
                />
                <div>
                  <Text className="font-bold text-white text-xs uppercase">MEETUP CHECK-INS:</Text>
                </div>
                <div>
                  <Text className="font-bold text-orange-500 text-lg uppercase">999</Text>
                </div>
              </div>
            </div>
            <div class="w-1/3 m-0.5">
              <div className="bg-silph-gray text-white border-transparent rounded-none">
                <Image
                  className="mt-2"
                  width={25}
                  preview={false}
                  src="https://assets.thesilphroad.com/img/icons/binoculars.png"
                />
                <div>
                  <Text className="font-bold text-white text-xs uppercase">MIGRATIONS REPORTED:</Text>
                </div>
                <div>
                  <Text className="font-bold text-orange-500 text-lg uppercase">999</Text>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-silph-gray text-white border-transparent rounded-none m-0.5">
            <div className="flex">
              <div class="w-1/2">
                <Text className="font-bold text-white text-xxs uppercase">JOINED:17 JUL, 2019</Text>
              </div>
              <div class="w-1/2">
                <Text className="font-bold text-white text-xxs uppercase">LAST UPDATED:16 APR, 2023</Text>
              </div>
            </div>
          </div>

          <div className="flex text-left mt-4">
            <Text className="font-bold text-white text-2xl">Challenges</Text>
          </div>
          <div class="flex">
            <div class="w-1/5 ">
              <Image
                width={72}
                src="https://assets.thesilphroad.com/img/badges/flex-challenge-i.png"
                // className="grayscale"
                preview={false}
              />
            </div>

            <div class="w-1/5 ">
              <Image
                width={72}
                src="https://assets.thesilphroad.com/img/badges/golden-ghost-gym-challenge.png"
                className="grayscale mt-12"
                preview={false}
              />
            </div>

            <div class="w-1/5 ">
              <Image
                width={72}
                src="https://assets.thesilphroad.com/img/badges/goliath-i.png"
                className="grayscale"
                preview={false}
              />
            </div>

            <div class="w-1/5 ">
              <Image
                width={72}
                src="https://assets.thesilphroad.com/img/badges/hatch-to-hero.png"
                // className="grayscale"
                className="mt-12"
                preview={false}
              />
            </div>

            <div class="w-1/5 ">
              <Image
                width={72}
                src="https://assets.thesilphroad.com/img/badges/venomoth-exeggutor-solo.png"
                className="grayscale"
                preview={false}
              />
            </div>
          </div>
          <Divider className="border-blue-400 border-2" />
          <div className="flex h-24">
            <div className="w-2/3 flex justify-center items-center">
              <Text className="font-bold text-white text-xs uppercase">FAVORITE</Text>
              <br />
              <Text className="text-white text-xs uppercase">MEETUPS</Text>
            </div>
            <div className="w-1/3">
              <Space className="-ml-11">
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/202304.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/201907.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/201908.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/201909.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
              </Space>
              <Space className="-mt-3">
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
              </Space>
            </div>
          </div>
          <div className="flex h-24 bg-silph-gray">
            <div className="w-2/3 flex justify-center items-center">
              <Text className="font-bold text-white text-xs uppercase">FAVORITE</Text>
              <br />
              <Text className="text-white text-xs uppercase">AWARDS</Text>
            </div>
            <div className="w-1/3 mt-2">
              <Space className="-ml-11">
                <Image
                  width={36}
                  src="https://assets.thesilphroad.com/img/badges/gg-s2-out-of-stardust-i.png"
                  preview={false}
                />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/low-on-stardust.png" preview={false} />
                <Image
                  width={36}
                  src="https://assets.thesilphroad.com/img/badges/one-migration-report.png"
                  preview={false}
                />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/traveler-card.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
              </Space>
              <Space className="-mt-3">
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
                <Image width={36} src="https://assets.thesilphroad.com/img/badges/holder.png" preview={false} />
              </Space>
            </div>
          </div>
          <div className="flex">
            <div className="mr-2 mt-2">
              <Image
                preview={false}
                width={64}
                className="invert"
                src="https://assets.thesilphroad.com/img/SilphCoStamp.png"
              />
            </div>
            <div className="mt-2">
              <div className="text-left -mb-2">
                <Text className="font-bold text-white text-xs uppercase">PLAYSTYLE:</Text>
              </div>
              <div className="text-left -mb-2">
                <Text className="font-bold text-white text-xxs uppercase">
                  Casual, Working on Completing The Pokédex, Shiny Hunting, and Catching Raid Bosses. Typically Raids 1x/week
                  and Battles 5x/week.
                </Text>
              </div>
            </div>
          </div>
        </Card>
      </Space>
    </Space>
  );
};
export default TrainerCard;
