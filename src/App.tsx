import axios from 'axios';
import { useState } from 'react';

interface UserLogs {
  timestamp: string;
  content: string;
  user: string;
}

function App() {
  const [channel, setChannel] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [response, setResponse] = useState<UserLogs[]>([]);

  const handleClick = () => {
    if (channel === '' || user === '') return;

    axios
      .get(`https://logs.ivr.fi/channel/${channel}/user/${user}`)
      .then((response) => convertToJSON(response.data))
      .catch(() => setResponse([]));
  };

  function convertToJSON(text: string) {
    const messages: UserLogs[] = [];

    const lines = text.split('\n');
    for (let i = 0; i < lines.length - 1; i++) {
      const line = lines[i];
      const timestampStart = line.indexOf('[') + 1;
      const timestampEnd = line.indexOf(']');
      const timestamp = line.substring(timestampStart, timestampEnd).trim();
      const content = line.includes(`subscribed`)
        ? line.split(`${channel} `)[1]
        : line.includes('gifted')
        ? line.split(`${channel} `)[1]
        : line.split(`${channel} ${user}:`)[1];
      console.log(line.split(`${channel} `));

      const message: UserLogs = {
        timestamp,
        user: user,
        content,
      };

      messages.push(message);
    }

    setResponse(messages);
  }

  return (
    <>
      {console.log(response)}
      <div className="w-[600px] bg-[#18181A] h-[410px] p-10 overflow-hidden justify-center items-center gap-3 flex flex-col">
        <h1 className="text-[#BF8BE7] text-2xl font-black">Twitch Logs</h1>
        <div className="flex gap-5 items-center justify-center h-1/5">
          <select
            name=""
            id=""
            className="w-[50%] bg-[#262628] px-3 py-5 rounded-xl text-[#939393] outline-none "
            onChange={(event) => setChannel(event.target.value)}
          >
            <option value="" disabled selected>
              Select a Twitch Channel...
            </option>
            <option value="hackliin">hackliin</option>
            <option value="negevnata">negevnata</option>
            <option value="kaicenat">kaicenat</option>
            <option value="kleinegrueneexe">kleinegrueneexe</option>
            <option value="weest">weest</option>
            <option value="lilypichu">lilypichu</option>
            <option value="fuslie">fuslie</option>
            <option value="mckytv">mckytv</option>
            <option value="vei">vei</option>
            <option value="ronnyberger">ronnyberger</option>
            <option value="passhonrippu">passhonrippu</option>
            <option value="tolekk">tolekk</option>
            <option value="michaelreeves">michaelreeves</option>
            <option value="reckful">reckful</option>
            <option value="alte">alte</option>
            <option value="kanershi">kanershi</option>
            <option value="commanderpasta">commanderpasta</option>
            <option value="ame_________">ame_________</option>
            <option value="gempir">gempir</option>
            <option value="diejuja">diejuja</option>
            <option value="asmongold">asmongold</option>
            <option value="adeptthebest">adeptthebest</option>
            <option value="xenev">xenev</option>
            <option value="elpws">elpws</option>
            <option value="teyn">teyn</option>
            <option value="nitrousgranola">nitrousgranola</option>
            <option value="leon_7">leon_7</option>
            <option value="blex__">blex__</option>
            <option value="vesp3r">vesp3r</option>
            <option value="jaycgee">jaycgee</option>
            <option value="henlips1">henlips1</option>
            <option value="sassysally_">sassysally_</option>
            <option value="quitelola">quitelola</option>
            <option value="pajlada">pajlada</option>
            <option value="randers">randers</option>
            <option value="discobics">discobics</option>
            <option value="ratirl">ratirl</option>
            <option value="enviosity">enviosity</option>
            <option value="bshray_">bshray_</option>
            <option value="smilesxlnc">smilesxlnc</option>
            <option value="betty">betty</option>
            <option value="ambicion0">ambicion0</option>
            <option value="esfandtv">esfandtv</option>
            <option value="sadge_i_watch_erobb">sadge_i_watch_erobb</option>
            <option value="nrg_hamlinz">nrg_hamlinz</option>
            <option value="therealknossi">therealknossi</option>
            <option value="senderak">senderak</option>
            <option value="mulder">mulder</option>
            <option value="pointcrow">pointcrow</option>
            <option value="functioneel">functioneel</option>
            <option value="hasanabi">hasanabi</option>
            <option value="kuhi">kuhi</option>
            <option value="revedtv">revedtv</option>
            <option value="black_luna_esports">black_luna_esports</option>
            <option value="neekolul">neekolul</option>
            <option value="gmhikaru">gmhikaru</option>
            <option value="vmyk">vmyk</option>
            <option value="jushilive">jushilive</option>
            <option value="quarterjade">quarterjade</option>
            <option value="montanablack88">montanablack88</option>
            <option value="tinakitten">tinakitten</option>
            <option value="albi_1996">albi_1996</option>
            <option value="projektmelody">projektmelody</option>
            <option value="samtwocan">samtwocan</option>
            <option value="katerino">katerino</option>
            <option value="marcfryd">marcfryd</option>
            <option value="fairywink">fairywink</option>
            <option value="sparkyy1337_">sparkyy1337_</option>
            <option value="baddra_">baddra_</option>
            <option value="svmira">svmira</option>
            <option value="umbotti">umbotti</option>
            <option value="unsympathisch_tv">unsympathisch_tv</option>
            <option value="hoxx_">hoxx_</option>
            <option value="nam______________________">
              nam______________________
            </option>
            <option value="m3ndez">m3ndez</option>
            <option value="fl0m">fl0m</option>
            <option value="jelolul">jelolul</option>
            <option value="pewdiepie">pewdiepie</option>
            <option value="annapinna">annapinna</option>
            <option value="schnessa">schnessa</option>
            <option value="ellum">ellum</option>
            <option value="mrc9cs">mrc9cs</option>
            <option value="sykkuno">sykkuno</option>
            <option value="papaplatte">papaplatte</option>
            <option value="fedmyster">fedmyster</option>
            <option value="buff_birne">buff_birne</option>
            <option value="kalk">kalk</option>
            <option value="tannar">tannar</option>
            <option value="symfuhny">symfuhny</option>
            <option value="justmariusz">justmariusz</option>
            <option value="g00ze_">g00ze_</option>
            <option value="inkop">inkop</option>
            <option value="mande">mande</option>
            <option value="emredesu">emredesu</option>
            <option value="redshell">redshell</option>
            <option value="steamyfreshmeme">steamyfreshmeme</option>
            <option value="tomsiesing">tomsiesing</option>
            <option value="loltyler1">loltyler1</option>
            <option value="cashapp">cashapp</option>
            <option value="vulpeshd">vulpeshd</option>
            <option value="tosic_cs">tosic_cs</option>
            <option value="ludwig">ludwig</option>
            <option value="onezart">onezart</option>
            <option value="testaccount420">testaccount420</option>
            <option value="skynetcentral">skynetcentral</option>
            <option value="greekgodx">greekgodx</option>
            <option value="elina">elina</option>
            <option value="xd42oxd">xd42oxd</option>
            <option value="xalhs">xalhs</option>
            <option value="niiiiiko">niiiiiko</option>
            <option value="emanueimp4">emanueimp4</option>
            <option value="appledcs">appledcs</option>
            <option value="roaringiron">roaringiron</option>
            <option value="kyuubiics">kyuubiics</option>
            <option value="pokimane">pokimane</option>
            <option value="syrinxx1337">syrinxx1337</option>
            <option value="og_mrk">og_mrk</option>
            <option value="tomso">tomso</option>
            <option value="starsmitten">starsmitten</option>
            <option value="elynakamperi">elynakamperi</option>
            <option value="missjulex">missjulex</option>
            <option value="auror6s">auror6s</option>
            <option value="makke375">makke375</option>
            <option value="radiantsoul_tv">radiantsoul_tv</option>
            <option value="crayator">crayator</option>
            <option value="yassuo">yassuo</option>
            <option value="appyturk">appyturk</option>
            <option value="tubbo">tubbo</option>
            <option value="easyemi">easyemi</option>
            <option value="ursentv">ursentv</option>
            <option value="m0xyy">m0xyy</option>
            <option value="nani">nani</option>
            <option value="kian">kian</option>
            <option value="felanbird">felanbird</option>
            <option value="summit1g">summit1g</option>
            <option value="painlivestream">painlivestream</option>
            <option value="whodat950">whodat950</option>
            <option value="wolfabelle">wolfabelle</option>
            <option value="la_miva">la_miva</option>
            <option value="missjulie">missjulie</option>
            <option value="merleperle">merleperle</option>
            <option value="bart">bart</option>
            <option value="vansamaofficial">vansamaofficial</option>
            <option value="dizzy">dizzy</option>
            <option value="maarionete">maarionete</option>
            <option value="anujbost">anujbost</option>
            <option value="lisabby">lisabby</option>
            <option value="bajlada">bajlada</option>
            <option value="39daph">39daph</option>
            <option value="crazyslick">crazyslick</option>
            <option value="sennyk4">sennyk4</option>
            <option value="tastiic">tastiic</option>
            <option value="sugarteddy_">sugarteddy_</option>
            <option value="imaqtpie">imaqtpie</option>
            <option value="quai1">quai1</option>
            <option value="forsen">forsen</option>
            <option value="heyimbee">heyimbee</option>
            <option value="amouranth">amouranth</option>
            <option value="tunks">tunks</option>
            <option value="itzdaboss_">itzdaboss_</option>
            <option value="tarik">tarik</option>
            <option value="idubbbz">idubbbz</option>
            <option value="multiani_">multiani_</option>
            <option value="hyruverse">hyruverse</option>
            <option value="disguisedtoast">disguisedtoast</option>
            <option value="lirik">lirik</option>
            <option value="b2k_daftleech">b2k_daftleech</option>
            <option value="mikeysqueeze">mikeysqueeze</option>
            <option value="aymankc">aymankc</option>
            <option value="hamedloco">hamedloco</option>
            <option value="wiltee_">wiltee_</option>
            <option value="vhns_">vhns_</option>
            <option value="woops">woops</option>
            <option value="nitewaver">nitewaver</option>
            <option value="its_physikz">its_physikz</option>
            <option value="supercool">supercool</option>
            <option value="brodie">brodie</option>
            <option value="lusaiya">lusaiya</option>
            <option value="bearbubb">bearbubb</option>
            <option value="kattahw">kattahw</option>
            <option value="hyphin">hyphin</option>
            <option value="yabbe">yabbe</option>
            <option value="epicmango7">epicmango7</option>
            <option value="freyzplayz">freyzplayz</option>
            <option value="ugandanloki">ugandanloki</option>
            <option value="lvndmark">lvndmark</option>
            <option value="moonmoon">moonmoon</option>
            <option value="maxi">maxi</option>
            <option value="l3naa">l3naa</option>
            <option value="kaysubi">kaysubi</option>
            <option value="russel">russel</option>
            <option value="richwcampbell">richwcampbell</option>
            <option value="fabibene">fabibene</option>
            <option value="linchenx33">linchenx33</option>
            <option value="leppunen">leppunen</option>
            <option value="thanhschaefer">thanhschaefer</option>
            <option value="saiiren">saiiren</option>
            <option value="danielpello1">danielpello1</option>
            <option value="vadikus007">vadikus007</option>
            <option value="yosefsaa7">yosefsaa7</option>
            <option value="masayoshi">masayoshi</option>
            <option value="corpse_husband">corpse_husband</option>
            <option value="negnegtm">negnegtm</option>
            <option value="akkirasetsu">akkirasetsu</option>
            <option value="missmagikarp">missmagikarp</option>
            <option value="retrora">retrora</option>
            <option value="vyakura">vyakura</option>
            <option value="homyatol">homyatol</option>
            <option value="myth">myth</option>
            <option value="sohyp3d">sohyp3d</option>
            <option value="cyr">cyr</option>
            <option value="niklugi">niklugi</option>
            <option value="pinacolada_99">pinacolada_99</option>
            <option value="mopolo">mopolo</option>
            <option value="ilgabbrone">ilgabbrone</option>
            <option value="s1mcsgo">s1mcsgo</option>
            <option value="zfih">zfih</option>
            <option value="moistcr1tikal">moistcr1tikal</option>
            <option value="tolgafreediver">tolgafreediver</option>
            <option value="swushwoi">swushwoi</option>
            <option value="liam">liam</option>
            <option value="ungespielt">ungespielt</option>
            <option value="kubafps">kubafps</option>
            <option value="pajbot">pajbot</option>
            <option value="kalei">kalei</option>
            <option value="honeypuu">honeypuu</option>
            <option value="mrv29">mrv29</option>
            <option value="empi">empi</option>
            <option value="nmplol">nmplol</option>
            <option value="jeffboys123">jeffboys123</option>
            <option value="jordlson">jordlson</option>
            <option value="griphthefrog">griphthefrog</option>
            <option value="mirbit">mirbit</option>
            <option value="brookeab">brookeab</option>
            <option value="emiru">emiru</option>
            <option value="thotbear">thotbear</option>
            <option value="sodapoppin">sodapoppin</option>
            <option value="kclafon">kclafon</option>
            <option value="skillerin0504">skillerin0504</option>
            <option value="kurpyy">kurpyy</option>
            <option value="isnicable">isnicable</option>
            <option value="ajthedj_747">ajthedj_747</option>
            <option value="ace_tea">ace_tea</option>
            <option value="tepx">tepx</option>
            <option value="titlechange_bot">titlechange_bot</option>
            <option value="alecbirdman">alecbirdman</option>
            <option value="no4mt">no4mt</option>
            <option value="giggsentv">giggsentv</option>
            <option value="smallspleen">smallspleen</option>
            <option value="romydank">romydank</option>
            <option value="thepositivebot">thepositivebot</option>
            <option value="shadowshark12">shadowshark12</option>
            <option value="supinic">supinic</option>
            <option value="crayzbeats">crayzbeats</option>
            <option value="cursu__">cursu__</option>
            <option value="nymn">nymn</option>
            <option value="velcuz">velcuz</option>
            <option value="nicoo4k">nicoo4k</option>
            <option value="dojacattington">dojacattington</option>
            <option value="shlbez">shlbez</option>
            <option value="erobb221">erobb221</option>
            <option value="empyrione">empyrione</option>
            <option value="brittt">brittt</option>
            <option value="jtmagicman">jtmagicman</option>
            <option value="liquidline">liquidline</option>
            <option value="penta">penta</option>
            <option value="elded">elded</option>
            <option value="catsh">catsh</option>
            <option value="psisyn">psisyn</option>
            <option value="maya">maya</option>
            <option value="lacari">lacari</option>
            <option value="inscope21tv">inscope21tv</option>
            <option value="okabar">okabar</option>
            <option value="nyanners">nyanners</option>
            <option value="f0restenw0w">f0restenw0w</option>
            <option value="ajspyman">ajspyman</option>
            <option value="fiili_">fiili_</option>
            <option value="trainwreckstv">trainwreckstv</option>
            <option value="clintstevens">clintstevens</option>
            <option value="quin69">quin69</option>
            <option value="saan1ty">saan1ty</option>
            <option value="atrioc">atrioc</option>
            <option value="slavikjunge685">slavikjunge685</option>
            <option value="gkey">gkey</option>
            <option value="deme">deme</option>
            <option value="zoil">zoil</option>
            <option value="pokelawls">pokelawls</option>
            <option value="sweet_anita">sweet_anita</option>
            <option value="zomballr">zomballr</option>
            <option value="n1c0noskill">n1c0noskill</option>
            <option value="itscocosh">itscocosh</option>
            <option value="happythoughts">happythoughts</option>
            <option value="jann1sde">jann1sde</option>
            <option value="xqc">xqc</option>
            <option value="jokerdtv">jokerdtv</option>
            <option value="austinshow">austinshow</option>
            <option value="boraflame">boraflame</option>
            <option value="drhupi">drhupi</option>
            <option value="xxswaggymcyolo420xx">xxswaggymcyolo420xx</option>
            <option value="angelskimi">angelskimi</option>
            <option value="watchvenn">watchvenn</option>
            <option value="memo5o">memo5o</option>
            <option value="silvername">silvername</option>
            <option value="coreytheguy">coreytheguy</option>
            <option value="ariasaki">ariasaki</option>
            <option value="5crome">5crome</option>
            <option value="pr0p3r_">pr0p3r_</option>
            <option value="gorgc">gorgc</option>
            <option value="adlerssonpictures">adlerssonpictures</option>
            <option value="stoked">stoked</option>
            <option value="xchocobars">xchocobars</option>
            <option value="ayoecho">ayoecho</option>
            <option value="stavini">stavini</option>
            <option value="p_a_r_a_">p_a_r_a_</option>
            <option value="atoxiv">atoxiv</option>
          </select>
          <input
            type="text"
            placeholder="Enter a User"
            className="w-[50%] bg-[#262628] px-5 py-5 rounded-xl text-[#939393] outline-none"
            onChange={(e) => setUser(e.target.value)}
          />
          <button
            className=" bg-[#BF8BE7] px-5 py-5 rounded-xl text-black outline-none"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <div className="flex flex-col bg-[#262628] mt-5 rounded-xl text-white w-full h-4/5 p-5 overflow-auto break-words gap-1">
          {response.length !== 0 ? (
            response.map((res) => {
              return (
                <p>
                  <b className=" text-[#929292] font-normal mr-1">
                    [{res.timestamp}]
                  </b>
                  <b className="text-[#BF8BE7]">{res.user}</b>: {res.content}
                </p>
              );
            })
          ) : (
            <p>no messages or the user doesn't exist...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
