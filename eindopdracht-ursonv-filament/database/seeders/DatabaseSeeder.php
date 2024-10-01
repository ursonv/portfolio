<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Prediction;
use App\Models\Race;
use App\Models\Cyclist;
use App\Models\Team;
use App\Models\Result;
use App\Models\Review;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Prediction::factory(50)->create();
        //Race::factory(20)->create();
        //Cyclist::factory(30)->create();
        //Team::factory(10)->create();
        //Review::factory(40)->create();

        $teamsData = [
            [
                'id' => 1,
                'name' => 'BORA-hansgrohe',
                'country' => 'Germany',
                'mainsponsor' => 'BORA',
                'foundationdate' => '2010-01-01',
                'slug' => 'bora-hansgrohe',
                'img' => 'https://seeklogo.com/images/B/bora-hansgohe-logo-EF9C610B65-seeklogo.com.png',
            ],
            [
                'id' => 2,
                'name' => 'INEOS Grenadiers',
                'country' => 'United Kingdom',
                'mainsponsor' => 'INEOS',
                'foundationdate' => '2010-01-01',
                'slug' => 'ineos-grenadiers',
                'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqA9IWemRoy7SxUAZJGPsl9oAmx4YFEq2CKA&s',
            ],
            [
                'id' => 3,
                'name' => 'Team Visma-Lease a bike',
                'country' => 'Netherlands',
                'mainsponsor' => 'Jumbo',
                'foundationdate' => '2013-01-01',
                'slug' => 'team-visma-lease-a-bike',
                'img' => 'https://upload.wikimedia.org/wikipedia/fr/thumb/4/47/Logo_Visma-Lease_a_Bike.svg/1200px-Logo_Visma-Lease_a_Bike.svg.png',
            ],
            [
                'id' => 4,
                'name' => 'Soudal Quick-Step',
                'country' => 'Belgium',
                'mainsponsor' => 'Deceuninck',
                'foundationdate' => '2003-01-01',
                'slug' => 'soudal-quick-step',
                'img' => 'https://upload.wikimedia.org/wikipedia/en/e/e8/Soudal_Quick-Step_logo.png',
            ],
            [
                'id' => 5,
                'name' => 'Movistar Team',
                'country' => 'Spain',
                'mainsponsor' => 'Movistar',
                'foundationdate' => '1980-01-01',
                'slug' => 'movistar-team',
                'img' => 'https://i1.sndcdn.com/avatars-000364491323-971l3l-t1080x1080.jpg',
            ],
            [
                'id' => 6,
                'name' => 'UAE Team Emirates',
                'country' => 'United Arab Emirates',
                'mainsponsor' => 'UAE',
                'foundationdate' => '2017-01-01',
                'slug' => 'uae-team-emirates',
                'img' => 'https://upload.wikimedia.org/wikipedia/en/c/c8/UAE_Team_Emirates.png',
            ],
            [
                'id' => 7,
                'name' => 'Bahrain Victorious',
                'country' => 'Bahrain',
                'mainsponsor' => 'Bahrain',
                'foundationdate' => '2017-01-01',
                'slug' => 'bahrain-victorious',
                'img' => 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e4/Logo_%C3%89quipe_Cycliste_Barhain_Victorious_-_2021.svg/2048px-Logo_%C3%89quipe_Cycliste_Barhain_Victorious_-_2021.svg.png',
            ],
            [
                'id' => 8,
                'name' => 'Team Jayco AIUIa',
                'country' => 'Australia',
                'mainsponsor' => 'BikeExchange',
                'foundationdate' => '2011-01-01',
                'slug' => 'team-jayco-aiuia',
                'img' => 'https://upload.wikimedia.org/wikipedia/en/6/6d/Jayco_Logo_2019.jpg',
            ],
            [
                'id' => 9,
                'name' => 'EF Education - EasyPost',
                'country' => 'United States',
                'mainsponsor' => 'EF Education',
                'foundationdate' => '2007-01-01',
                'slug' => 'ef-education-easypost',
                'img' => 'https://yt3.googleusercontent.com/eLKmwzVmbhbgRGI9GvkPbb1UyoQu1PLYdTLlbaBKw_kV-TsY86fwxrtpDsz1_FBqZkIIPSZMmg=s900-c-k-c0x00ffffff-no-rj',
            ],            
            [
                'id' => 10,
                'name' => 'Alpecin - Deceuninck',
                'country' => 'Belgium',
                'mainsponsor' => 'Alpecin',
                'foundationdate' => '2013-01-01',
                'slug' => 'alpecin-deceuninck',
                'img' => 'https://firstcycling.com/img/teamlogo/21845.png',
            ],
            [
                'id' => 11,
                'name' => 'Team dsm-firmenich PostNL',
                'country' => 'Netherlands',
                'mainsponsor' => 'DSM',
                'foundationdate' => '2015-01-01',
                'slug' => 'team-dsm-firmenich-postnl',
                'img' => 'https://asset.scott-sports.com/fit-in/1200x675/sco/sco-bike-team-dsm-team-profile-team-profile-picture-1000x1000_2124496.jpg?signature=90b34ee27448797ca6efa64be850144a6250dde44756c78d283ecdaf1ebb5770',
            ],            
        ];        
        
        $cyclistsData = [
            [
                'team_id' => 1,
                'name' => 'Peter Sagan',
                'nationality' => 'Slovakia',
                'description' => 'Peter Sagan is a Slovakian cyclist, known for his sprinting and climbing abilities.',
                'slug' => 'peter-sagan',
                'img' => 'https://cyclingflash.ams3.cdn.digitaloceanspaces.com/506/01HXC9RNCVCZFZCH4A7BKZ64X9.jpg'
            ],
            [
                'team_id' => 2,
                'name' => 'Egan Bernal',
                'nationality' => 'Colombia',
                'description' => 'Egan Bernal is a Colombian cyclist, who won the Tour de France in 2019.',
                'slug' => 'egan-bernal',
                'img' => 'https://res.cloudinary.com/team-sky/image/upload/c_auto,g_auto,w_584,ar_1:1,q_90/umbraco-cms/media/cductitm/885x765pixels-riders3.jpg'
            ],
            [
                'team_id' => 1,
                'name' => 'Primoz Roglic',
                'nationality' => 'Slovenia',
                'description' => 'Primoz Roglic is a Slovenian cyclist, known for his time trial abilities and climbing prowess.',
                'slug' => 'primoz-roglic',
                'img' => 'https://www.bora-hansgrohe.com/_next/image?url=https%3A%2F%2Fbora-hansgrohe-cms.s3.eu-central-1.amazonaws.com%2F20231207_Riders_Headshots24_8151_5f2eebeddf.jpg&w=1200&q=85'
            ],
            [
                'team_id' => 10,
                'name' => 'Mathieu van der Poel',
                'nationality' => 'Netherlands',
                'description' => 'Mathieu van der Poel is a Dutch cyclist, excelling in various disciplines like road racing, cyclocross, and mountain biking.',
                'slug' => 'mathieu-van-der-poel',
                'img' => 'https://www.alpecin-deceuninck.com/images/team/vdp-wc.jpg'
            ],
            [
                'team_id' => 4,
                'name' => 'Julian Alaphilippe',
                'nationality' => 'France',
                'description' => 'Julian Alaphilippe is a French cyclist, known for his attacking style of riding and climbing ability.',
                'slug' => 'julian-alaphilippe',
                'img' => 'https://www.soudal-quickstepteam.com/images/team_rider/c_c/740x1020/alaphilippeportrait_1703412496.jpg'
            ],
            [
                'team_id' => 6,
                'name' => 'Tadej Pogacar',
                'nationality' => 'Slovenia',
                'description' => 'Tadej Pogacar is a Slovenian cyclist, known for his climbing ability and his victory in the 2020 Tour de France.',
                'slug' => 'tadej-pogacar',
                'img' => 'https://www.uaeteamemirates.com/wp-content/uploads/2021/12/Pogacar-285x492.png'
            ],
            [
                'team_id' => 9,
                'name' => 'Richard Carapaz',
                'nationality' => 'Ecuador',
                'description' => 'Richard Carapaz is an Ecuadorian cyclist, known for his climbing ability and his victory in the 2019 Giro d\'Italia.',
                'slug' => 'richard-carapaz',
                'img' => 'https://a.storyblok.com/f/135147/1080x1620/4bed26c051/24-01-03_richard-carapaz_our-team_1.jpg/m/828x1242/filters:quality(75)'
            ],
            [
                'team_id' => 4,
                'name' => 'Remco Evenepoel',
                'nationality' => 'Belgium',
                'description' => 'Remco Evenepoel is a Belgian cyclist, known for his exceptional time trial abilities and climbing skills. He is considered one of the most promising young talents in professional cycling.',
                'slug' => 'remco-evenepoel',
                'img' => 'https://www.soudal-quickstepteam.com/images/team_rider/c_c/740x1020/evenepoelportrait_1703412858.jpg'
            ],
            [
                'team_id' => 3,
                'name' => 'Wout van Aert',
                'nationality' => 'Belgium',
                'description' => 'Wout van Aert is a Belgian cyclist, known for his versatility in various terrains such as sprinting, time trialing, and cyclocross.',
                'slug' => 'wout-van-aert',
                'img' => 'https://d1lk6qpkbduawh.cloudfront.net/_810x1038_crop_top-center_85_none/Portret-renner-World-Tour-2024-vrijstaand-4_2023-12-20-150241_snfy.png'
            ],
            [
                'team_id' => 2,
                'name' => 'Elia Viviani',
                'nationality' => 'Italy',
                'description' => 'Elia Viviani is an Italian cyclist, known for his sprinting prowess and multiple stage victories in Grand Tours.',
                'slug' => 'elia-viviani',
                'img' => 'https://res.cloudinary.com/team-sky/image/upload/c_auto,g_auto,w_584,ar_1:1,q_90/umbraco-cms/media/vl3b1jzs/885x765pixels-riders29.jpg'
            ],
            [
                'team_id' => 4,
                'name' => 'Mikel Landa',
                'nationality' => 'Spain',
                'description' => 'Mikel Landa is a Spanish cyclist, known for his climbing ability and podium finishes in Grand Tours.',
                'slug' => 'mikel-landa',
                'img' => 'https://www.soudal-quickstepteam.com/images/team_rider/c_c/740x1020/landaportrait_1703415850.jpg'
            ],
            [
                'team_id' => 8,
                'name' => 'Michael Matthews',
                'nationality' => 'Australia',
                'description' => 'Michael Matthews is an Australian cyclist, known for his sprinting abilities and victories in one-day races and stages of Grand Tours.',
                'slug' => 'michael-matthews',
                'img' => 'https://greenedgecycling.com/2024/wp-content/uploads/2024/04/MICHAEL-MATTHEWS-1-1366x2048.jpg'
            ],
            [
                'team_id' => 11,
                'name' => 'Romain Bardet',
                'nationality' => 'France',
                'description' => 'Romain Bardet is a French cyclist, known for his climbing ability and podium finishes in Grand Tours.',
                'slug' => 'romain-bardet',
                'img' => 'https://www.teamdsmfirmenich-postnl.com/wp-content/uploads/2023/12/15.png'
            ],
            [
                'team_id' => 3,
                'name' => 'Jonas Vingegaard',
                'nationality' => 'Denmark',
                'description' => 'Jonas Vingegaard is a Danish cyclist, known for his climbing abilities and impressive performances in stage races. He has shown great potential in several WorldTour events.',
                'slug' => 'jonas-vingegaard',
                'img' => 'https://d1lk6qpkbduawh.cloudfront.net/_810x1038_crop_top-center_85_none/Portret-renner-World-Tour-2024-vrijstaand-3_2023-12-20-145822_flge.png'
            ],
            [
                'team_id' => 11,
                'name' => 'Fabio Jakobsen',
                'nationality' => 'Netherlands',
                'description' => 'Fabio Jakobsen is a Dutch cyclist, known for his sprinting abilities and victories in stages of Grand Tours and one-day races.',
                'slug' => 'fabio-jakobsen',
                'img' => 'https://www.teamdsmfirmenich-postnl.com/wp-content/uploads/2023/12/18.png'
            ],
            [
                'team_id' => 2,
                'name' => 'Filippo Ganna',
                'nationality' => 'Italy',
                'description' => 'Filippo Ganna is an Italian cyclist, known for his exceptional time trial abilities and strong performances in track cycling. He has won multiple world championships and Olympic gold medals.',
                'slug' => 'filippo-ganna',
                'img' => 'https://res.cloudinary.com/team-sky/image/upload/c_auto,g_auto,w_584,ar_1:1,q_90/umbraco-cms/media/4hrjbkof/885x765pixels-riders9.jpg'
            ],
            
        ];        
        
        $racesData = [
            [
                'title' => 'Tour de France',
                'distance' => 3360, 
                'location' => 'France',
                'slug' => 'tour-de-france',
                'img' => 'https://upload.wikimedia.org/wikipedia/en/6/60/Tour_de_France_logo_since_2019.svg',
            ],
            [
                'title' => 'Giro d\'Italia',
                'distance' => 3446,
                'location' => 'Italy',
                'slug' => 'giro-d-italia',
                'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQqfKK-e_gilNGdnaO9Nfh41FZAtr53A9Nw&s',
            ],
            [
                'title' => 'Vuelta a España',
                'distance' => 3290,
                'location' => 'Spain',
                'slug' => 'vuelta-a-espana',
                'img' => 'https://i0.wp.com/bicis.frangandara.net/wp-content/uploads/2022/08/vuelta-logo.jpg?ssl=1',
            ],
            [
                'title' => 'Paris-Roubaix',
                'distance' => 257,
                'location' => 'France',
                'slug' => 'paris-roubaix',
                'img' => 'https://www.paris-roubaix.fr/img/global/logo@2x.png',
            ],
            [
                'title' => 'Milano-Sanremo',
                'distance' => 298,
                'location' => 'Italy',
                'slug' => 'milano-sanremo',
                'img' => 'https://upload.wikimedia.org/wikipedia/fr/a/af/MILANO_SAN_REMO_LOGO_2020.svg',
            ],
            [
                'title' => 'Liege-Bastogne-Liege',
                'distance' => 259,
                'location' => 'Belgium',
                'slug' => 'liege-bastogne-liege',
                'img' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Li%C3%A8ge%E2%80%93Bastogne%E2%80%93Li%C3%A8ge_logo.svg/1200px-Li%C3%A8ge%E2%80%93Bastogne%E2%80%93Li%C3%A8ge_logo.svg.png',
            ],
            [
                'title' => 'Amstel Gold Race',
                'distance' => 260.1,
                'location' => 'Netherlands',
                'slug' => 'amstel-gold-race',
                'img' => 'https://upload.wikimedia.org/wikipedia/fr/thumb/0/0b/Logo_Amstel_Gold_Race.svg/1200px-Logo_Amstel_Gold_Race.svg.png',
            ],
            [
                'title' => 'Tour of Flanders',
                'distance' => 267,
                'location' => 'Belgium',
                'slug' => 'tour-of-flanders',
                'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2QSKVb8ZKMhCyjtL7OnJg06CNMkSJmf4eQ&s',
            ],
            [
                'title' => 'Strade Bianche',
                'distance' => 184,
                'location' => 'Italy',
                'slug' => 'strade-bianche',
                'img' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Strade_Bianche_logo.svg/1200px-Strade_Bianche_logo.svg.png',
            ],
            [
                'title' => 'Il Lombardia',
                'distance' => 243,
                'location' => 'Italy',
                'slug' => 'il-lombardia',
                'img' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Il_Lombardia.svg/640px-Il_Lombardia.svg.png',
            ],
            [
                'title' => 'La Fleche Wallonne',
                'distance' => 193.6,
                'location' => 'Belgium',
                'slug' => 'la-fleche-wallonne',
                'img' => 'https://cdn.cookielaw.org/logos/1cb7fe57-d2de-4bbe-be68-495598d39f44/a3e2907d-9f15-4bc2-9980-963c444c0f5d/f3bb9214-401d-437a-a7c5-9547338a2b96/FW_Logo_Q.jpg',
            ],
            [
                'title' => 'Tirreno-Adriatico',
                'distance' => 1_100, 
                'location' => 'Italy',
                'slug' => 'tirreno-adriatico',
                'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHW9sRoWLMwaFt1qkzRwPCp8sY35oT_ozuA&s',
            ],
            [
                'title' => 'Tour of California',
                'distance' => 1_000,
                'location' => 'United States',
                'slug' => 'tour-of-california',
                'img' => 'https://endurance.biz/wp-content/uploads/2017/10/171030_Amgen-Tour-of-California-logo.jpg',
            ],
            [
                'title' => 'Tour Down Under',
                'distance' => 850,
                'location' => 'Australia',
                'slug' => 'tour-down-under',
                'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlq-yCyV-fdcPcd0Lz_2zMfE0wU7Or_JIX8A&s',
            ],
            [
                'title' => 'Tour de Suisse',
                'distance' => 1_200,
                'location' => 'Switzerland',
                'slug' => 'tour-de-suisse',
                'img' => 'https://upload.wikimedia.org/wikipedia/de/thumb/a/a0/Logo_Tour_de_Suisse.svg/2560px-Logo_Tour_de_Suisse.svg.png',
            ],
            [
                'title' => 'Tour of Oman',
                'distance' => 900,
                'location' => 'Oman',
                'slug' => 'tour-of-oman',
                'img' => 'https://upload.wikimedia.org/wikipedia/en/5/54/Tour_of_oman_logo.jpg',
            ],
            [
                'title' => 'Tour de Romandie',
                'distance' => 800,
                'location' => 'Switzerland',
                'slug' => 'tour-de-romandie',
                'img' => 'https://www.tourderomandie.ch/wp-content/uploads/2019/12/logo-tdr.jpg',
            ],
            [
                'title' => 'Tour of Britain',
                'distance' => 1_500,
                'location' => 'United Kingdom',
                'slug' => 'tour-of-britain',
                'img' => 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Tour_of_Britain_logo.svg/1200px-Tour_of_Britain_logo.svg.png',
            ],
            [
                'title' => 'Tour of Turkey',
                'distance' => 1_100,
                'location' => 'Turkey',
                'slug' => 'tour-of-turkey',
                'img' => 'https://www.tourofturkiye.org.tr/Content/images/2022/temsilihaber.png',
            ],
            [
                'title' => 'Tour de Pologne',
                'distance' => 1_000,
                'location' => 'Poland',
                'slug' => 'tour-de-pologne',
                'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwRYXQrG4xp_Q-gyfAWoA37HiyyGv30rhwQ&s',
            ],
        ];


        foreach ($teamsData as $teamData) {
            Team::create($teamData);
        }

        foreach ($cyclistsData as $cyclistData) {
            Cyclist::create($cyclistData);
        }

        foreach ($racesData as $raceData) {
            Race::create($raceData);
        }



        //admin toevoegen, alle andere users zijn gwn users

        User::factory(1)->create([
            'admin' => 1,
            'name' => 'Urson Vermeersch',
            'email' => 'urson.vermeersch@student.arteveldehs.be',
            'password' => 'admin1234'
        ]);
    }
}
