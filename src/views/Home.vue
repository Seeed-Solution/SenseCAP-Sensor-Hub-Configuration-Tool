<i18n>
{
  "en": {
    "text: connectAsConfigMode": "Enter configuration mode automatically on device's booted",
    "text: clear data confirm": "This will clear all the storaged measurements in the flash. Once confirmed, the bootloader will launch the Application Firmware and storaged measurements will be wiped out.",
    "end": "end"
  },
  "zh": {
    "Serial Port": "串口",
    "text: connectAsConfigMode": "设备启动后自动进入配置模式",
    "Device Type": "设备类型",
    "Device EUI": "设备EUI",
    "App Key": "App密钥",
    "Card ICCID": "SIM卡ICCID",
    "Signal RSSI": "网络信号",
    "Data Interval": "上报周期",
    "Server Address": "服务器IP/域名",
    "Server Port": "端口",
    "Enable GPS": "使能GPS",
    "OTA Prepub": "使能OTA预发布固件",
    "Hardware Version": "硬件版本",
    "Software Version": "软件版本",
    "Read": "读取",
    "Write": "写入",
    "Update Fw": "更新固件",
    "Clear Data": "清空数据存储",
    "text: clear data confirm": "这个操作将会清空存储在Flash中的测量数据，点击\"清空\"后，设备将退出配置模式，进入正常工作模式，并执行清空操作。",
    "Do it": "清空",
    "Connect": "连接",
    "Disconnect": "断开",

    "Must between [5, 43200]": "必须在[5, 43200]范围内",
    "Must between [5, 720]": "必须在[5, 720]范围内",
    "Must between [1, 43200]": "必须在[1, 43200]范围内",
    "Must between [1, 65535]": "必须在[1, 65535]范围内",
    "Invalid LoRaWAN EUI (16 chars)": "无效的LoRaWAN EUI (16字符)",
    "Invalid LoRaPP EUI (32 chars)": "无效的LoRaPP EUI (32字符)",
    "Invalid domain": "不正确的域名格式",
    "Maximum 32 chars allowed": "最多32个字符",

    "end": "结束"
  }
}
</i18n>
<template>
  <v-container fluid class="py-0">
    <v-row>
      <!-- 左半屏，输入框 -->
      <v-col cols="6">
        <v-form ref="form1">
        <v-row class="pt-1">
          <!-- Fields -->
          <!-- connection -->
          <v-col cols="12" md="6" class="py-0">
            <v-select v-model="selectedSerialPort" :label="$t('Serial Port')"
              :items="serialPorts"
              :disabled="serialVSelectDisable"
              @focus="onSerialVSelectClicked"
              outlined dense hide-details>
            </v-select>
          </v-col>
          <v-col cols="12" md="6" class="py-0 d-flex justify-start">
            <v-btn rounded :color="connectBtnColor" width="120"
              @click="ConnectFn"
              dense>{{connectBtnText}}</v-btn>
          </v-col>
          <v-col cols="12" md="12" class="py-0">
            <v-checkbox v-model="connectAsConfigMode"
              :label="$t('text: connectAsConfigMode')"
              @change="configModeChangedFn"
              dense></v-checkbox>
          </v-col>
          <!-- eui & key -->
          <v-col cols="12" md="12" class="pb-0">
            <v-text-field v-model="deviceEUI" :label="$t('Device EUI')"
              :rules="deviceEUIRules" outlined dense>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="12" class="py-0">
            <v-text-field v-model="appKey" v-if="showHiddenCfg" :label="$t('App Key')"
              :rules="appKeyRules" outlined dense>
            </v-text-field>
          </v-col>
          <!-- cellular -->
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model="cardIccid" :label="$t('Card ICCID')"
              disabled outlined dense>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="py-0 d-flex justify-start align-start">
            <v-text-field v-model="signalRssi" :label="$t('Signal RSSI')"
              suffix="dBm"
              disabled outlined dense>
            </v-text-field>
            <v-icon class="align-self-start mt-2 ml-2">mdi-signal-cellular-{{signalIndex}}</v-icon>
          </v-col>
          <!-- interval -->
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model.number="dataInterval" type="number" :label="$t('Data Interval')"
              :rules="dataIntervalRules"
              :suffix="$t('minutes')" outlined dense>
            </v-text-field>
          </v-col>
          <!-- battery info -->
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model.number="battery" type="number" :label="$t('Battery')"
              suffix="%" disabled outlined dense>
            </v-text-field>
          </v-col>
          <!-- mqtt config -->
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model="serverAddr" :label="$t('Server Address')"
              @change="serverAddrChangedFn"
              :rules="serverAddrRules"
              outlined dense>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model.number="serverPort" type="number" :label="$t('Server Port')"
              :rules="serverPortRules"
              outlined dense>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model="username" :label="$t('Username')"
              :rules="[rules.char32AllowEmtpy]"
              outlined dense>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model="password" :label="$t('Password')"
              :rules="[rules.char32AllowEmtpy]"
              outlined dense>
            </v-text-field>
          </v-col>
          <!-- gps & ota switch -->
          <v-col cols="12" md="6" class="py-0">
            <v-switch v-model="enableGps" :label="$t('Enable GPS')" class="mt-0"
              outlined dense>
            </v-switch>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-switch v-model="enableOtaPrepub" v-if="showHiddenCfg" :label="$t('OTA Prepub')" class="mt-0"
              outlined dense>
            </v-switch>
          </v-col>
          <!-- hw & sw info -->
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model="hwVer" :label="$t('Hardware Version')" disabled outlined dense>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field v-model="swVer" :label="$t('Software Version')" disabled outlined dense>
            </v-text-field>
          </v-col>
          <!-- Buttons -->
          <v-col cols="12" class="py-0 d-flex justify-space-around">
            <v-btn rounded color="secondary" width="100"
              @click.stop="readFn()"
              :disabled="!serialOpened">{{$t('Read')}}</v-btn>
            <v-btn rounded color="secondary" width="100"
              @click.stop="writeFn()"
              :loading="writeLoading"
              :disabled="!serialOpened">{{$t('Write')}}</v-btn>
            <v-btn rounded color="secondary" width="120"
              @click.stop="updateFwFn()"
              :loading="updateFwLoading"
              :disabled="!serialOpened">{{$t('Update Fw')}}</v-btn>
            <v-btn rounded color="secondary" width="120"
              @click.stop="ClearDataFn()"
              :loading="clearCacheLoading"
              :disabled="!serialOpened">{{$t('Clear Data')}}</v-btn>
          </v-col>
        </v-row>
        </v-form>
      </v-col>
      <!-- 右半屏，console -->
      <v-col cols="6">
        <v-card outlined class="pl-2 pt-2">
        <div style="height:650px" id="terminal"></div>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- footer -->
    <v-row>
      <v-col cols="auto" class="d-flex flex-column align-center justify-center">
        <div style="width: 50px">
          <v-menu top offset-y close-on-click>
            <template v-slot:activator="{ on }">
              <span class="flag-icon" :class="flagIconClass" v-on="on"></span>
            </template>
            <v-list dense class="pa-0">
              <v-list-item-group v-model="locale">
                <v-list-item key="item1" class="py-0" link style="min-height: 30px;" value="en">
                  <v-list-item-title class="caption">English</v-list-item-title>
                </v-list-item>
                <v-list-item key="item2" class="py-0" link style="min-height: 30px;" value="zh">
                  <v-list-item-title class="caption">简体中文</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <div>
          <v-img src="../assets/sensecap.png" width="100px" @click.stop="logoClicked()"></v-img>
        </div>
      </v-col>
      <v-col cols="auto" class="d-flex flex-column align-center justify-center caption grey--text">
        <div>
          <v-tooltip top open-delay="1000" :disabled="!newVersion">
            <template v-slot:activator="{ on }">
              <v-badge color="pink" dot top :value="newVersion">
                <span v-on="on" @click="versionClicked()" id="versionText">v{{currentVersion}}</span>
              </v-badge>
            </template>
            <span>v{{newVersion}} available</span>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>

    <!-- dialog -->
    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card>
        <v-card-title class="headline">{{$t('Please confirm')}}</v-card-title>
        <v-card-text>{{$t('text: clear data confirm')}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            {{$t('Cancel')}}
          </v-btn>

          <v-btn color="red darken-1" text @click="doClearDataFn()">
            {{$t('Do it')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
const { ipcRenderer } = require('electron')
const { Readable } = require('stream')
const RegexParser = require('@serialport/parser-regex')
const ReadlineParser = require('@serialport/parser-readline')
const Store = require('electron-store');
const store = new Store();

const delayMs = ms => new Promise(res => setTimeout(res, ms))

export default {
  name: 'Home',
  data() {
    let rules = {
      required: value => !!value || this.$t("Required."),
      rangeWAN: value => (value >= 5 && value <=43200) || this.$t("Must between [5, 43200]"),
      rangePP: value => (value >= 5 && value <=720) || this.$t("Must between [5, 720]"),
      rangeSH: value => (value >= 1 && value <=43200) || this.$t("Must between [1, 43200]"),
      rangePort: value => (value >= 1 && value <=65535) || this.$t("Must between [1, 65535]"),
      int: value => (/\.+/.test(value)) ? this.$t("Must be integer.") : true,
      eui16: value => (/^\w{16}$/.test(value)) || this.$t("Invalid LoRaWAN EUI (16 chars)"),
      eui32: value => (/^\w{32}$/.test(value)) || this.$t("Invalid LoRaPP EUI (32 chars)"),
      char32AllowEmtpy: value => {
        if (value) return (/^[a-z0-9-_.]{1,32}$/i.test(value)) || this.$t("Maximum 32 chars allowed")
        else return true
      },
      domain: value => (/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/i.test(value)) || (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(value)) || this.$t("Invalid domain"),
    }
    return {
      //rules
      rules: rules,
      deviceEUIRules: [rules.required, rules.eui16],
      appEUIRules: [rules.required, rules.eui16],
      appKeyRules: [rules.required, rules.eui32],
      dataIntervalRules: [rules.int, rules.rangeSH],
      serverAddrRules: [],
      serverPortRules: [],
      //loading
      writeLoading: false,
      updateFwLoading: false,
      clearCacheLoading: false,
      //
      // connectBtnText: this.$t('Connect'),
      // connectBtnColor: 'secondary',
      // serialVSelectDisable: false,
      selectedSerialPort: null,
      serialPorts: [],
      serialOpened: false,
      connectAsConfigMode: false,
      showHiddenCfg: false,
      //config fields
      labelAppEUI: 'App EUI',
      labelAppKey: 'App Key',
      deviceEUI: '',
      deviceEUI2: '',
      appEUI: '',
      appEUI2: '',
      appKey: '',
      appKey2: '',
      cardIccid: '',
      signalRssi: -120,
      signalIndex: 'outline', //1,2,3,outline
      dataInterval: 60,
      dataInterval2: 60,
      battery: 100,
      serverAddr: '',
      serverAddr2: '',
      serverPort: 1883,
      serverPort2: 1883,
      username: '',
      username2: '',
      password: '',
      password2: '',
      enableGps: true,
      enableGps2: true,
      enableOtaPrepub: false,
      enableOtaPrepub2: false,
      hwVer: '',
      swVer: '',
      //stream parse
      stream: null,
      pauseParseLine: false,
      customParseCallback: null,
      //ota
      currentVersion: '',
      newVersion: '',
      //i18n
      selectedLocaleIso: 'us',
      locale: 'en',
      //hidden function
      logoClickCnt: 0,
      timeoutHandler: null,
      //dialog
      dialog: null,
    }
  },
  watch: {
    locale(newVal, oldVal) {
      console.log('locale newVal:', newVal, ', oldVal:', oldVal)
      if (newVal === oldVal || !newVal) return
      if (newVal === 'en') this.selectedLocaleIso = 'us'
      else if (newVal === 'zh') this.selectedLocaleIso = 'cn'
      this.$root.$i18n.locale = newVal
      store.set('chosenLocale', newVal)
      ipcRenderer.send('locale-change', newVal)
    },
    signalRssi(newVal, oldVal) {
      console.log('signalRssi newVal:', newVal, ', oldVal:', oldVal)
      if (newVal === oldVal || !newVal) return
      let rssi = parseInt(newVal)
      if (rssi > -71) this.signalIndex = '3'
      else if (rssi > -91 && rssi <= -71) this.signalIndex = '2'
      else if (rssi > -113 && rssi <= -91) this.signalIndex = '1'
      else if (rssi <= -113) this.signalIndex = 'outline'
    }
  },
  computed: {
    flagIconClass: function() {
      return 'flag-icon-' + this.selectedLocaleIso.toLowerCase()
    },
    connectBtnText: function() {
      return this.serialOpened ? this.$t('Disconnect') : this.$t('Connect')
    },
    connectBtnColor: function() {
      return this.serialOpened ? 'primary' : 'secondary'
    },
    serialVSelectDisable: function() {
      return this.serialOpened
    }
  },
  methods: {
    onSerialVSelectClicked() {
      ipcRenderer.send('init-serial-req')
      return true
    },
    ConnectFn() {
      console.log(this.selectedSerialPort)
      if (!this.selectedSerialPort) return
      if (!this.serialOpened) {
        ipcRenderer.send('serial-open-req', this.selectedSerialPort)
      } else {
        ipcRenderer.send('serial-close-req')
      }
    },
    readFn() {
      ipcRenderer.send('serial-rx', '\r\nh')
    },
    waitSomething(needle, timeout) {
      return new Promise((resolve, reject) => {
        let self = this
        let h = setTimeout(() => {
          reject(`wait "${needle}" timeout!`)
          self.customParseCallback = null
        }, timeout)
        self.customParseCallback = (line) => {
          if (line.includes(needle)) {
            clearTimeout(h)
            self.customParseCallback = null
            resolve()
          }
        }
      })
    },
    writeOne(cmd, value, needle, timeout) {
      return Promise.resolve().then(() => {
        ipcRenderer.send('serial-rx', cmd)
      }).then(() => {
        return delayMs(500)
      }).then(() => {
        ipcRenderer.send('serial-rx', value + '\r\n')
        return this.waitSomething(needle, timeout)
      }).then(() => {
        return delayMs(500)
      })
    },
    writeFn() {
      this.deviceEUI = this.deviceEUI.trim()
      this.appEUI = this.appEUI.trim()
      this.appKey = this.appKey.trim()

      if (!this.$refs.form1.validate()) return false

      this.writeLoading = true

      let needUpdateDeviceEUI = (this.deviceEUI !== this.deviceEUI2)
      let needUpdateAppEUI = (this.appEUI !== this.appEUI2)
      let needUpdateAppKey = (this.appKey !== this.appKey2)
      let needUpdateDataInterval = (this.dataInterval !== this.dataInterval2)
      let needUpdateServerAddr = (this.serverAddr !== this.serverAddr2)
      let needUpdateServerPort = (this.serverPort !== this.serverPort2)
      let needUpdateUsername = (this.username !== this.username2)
      let needUpdatePassword = (this.password !== this.password2)
      let needUpdateGPS = (this.enableGps !== this.enableGps2)
      let needUpdateOta = (this.enableOtaPrepub !== this.enableOtaPrepub2)
      console.log({
        needUpdateDeviceEUI: needUpdateDeviceEUI,
        needUpdateAppEUI: needUpdateAppEUI,
        needUpdateAppKey: needUpdateAppKey,
        needUpdateDataInterval: needUpdateDataInterval,
        needUpdateServerAddr: needUpdateServerAddr,
        needUpdateServerPort: needUpdateServerPort,
        needUpdateUsername: needUpdateUsername,
        needUpdatePassword: needUpdatePassword,
        needUpdateGPS: needUpdateGPS,
        needUpdateOta: needUpdateOta
      })

      if (!(needUpdateDeviceEUI || needUpdateAppEUI || needUpdateAppKey || needUpdateDataInterval ||
            needUpdateServerAddr || needUpdateServerPort || needUpdateUsername || needUpdatePassword ||
            needUpdateGPS || needUpdateOta)) {
        console.log('no need to write')
        this.writeLoading = false
        return
      }

      this.pauseParseLine = true
      ipcRenderer.send('serial-rx', '\r\n')
      delayMs(500).then(() => {
        ipcRenderer.send('serial-rx', 'h')
        return this.waitSomething('Please Enter your command with Enter', 3000)
      })
      .then(() => {
        return delayMs(100)
      })
      .then(() => { //device EUI
        this.pauseParseLine = false
        if (needUpdateDeviceEUI) return this.writeOne('d', this.deviceEUI, 'The new Device EUI is', 2000)
      })
      .then(() => { //app EUI
        if (needUpdateAppEUI) return this.writeOne('a', this.appEUI, 'The new App EUI is', 2000)
      })
      .then(() => { //app Key
        if (needUpdateAppKey) return this.writeOne('k', this.appKey, 'The new App Key is', 2000)
      })
      .then(() => { //data Interval
        if (needUpdateDataInterval) return this.writeOne('i', this.dataInterval, 'Now the data interval is', 2000)
      })
      .then(() => { //server address
        if (needUpdateServerAddr) return this.writeOne('s', this.serverAddr, 'New remote host', 2000)
      })
      .then(() => { //server port
        if (needUpdateServerPort) return this.writeOne('p', this.serverPort, 'New remote port', 2000)
      })
      .then(() => { //username
        if (needUpdateUsername) return this.writeOne('n', this.username, 'New user name', 2000)
      })
      .then(() => { //password
        if (needUpdatePassword) return this.writeOne('m', this.password, 'New password', 2000)
      })
      .then(() => { //GPS
        if (needUpdateGPS) return this.writeOne('g', this.enableGps ? 'Y' : 'N', 'New GPS Switch State', 2000)
      })
      .then(() => { //Ota prepub
        if (needUpdateOta) return this.writeOne('o', this.enableOtaPrepub ? 'Y' : 'N', 'New OTA preview Switch State', 2000)
      })
      .then(() => { //read back finally to refresh the old value
        this.readFn()
      })
      .catch((err) => {
        console.warn('writeFn error:', err)
      })
      .finally(() => {
        this.writeLoading = false
      })
    },
    updateFwFn() {
      if (!this.serialOpened) return
      ipcRenderer.send('serial-rx', '\r\n')
      delayMs(500).then(() => {
        ipcRenderer.send('serial-rx', 'h')
        return this.waitSomething('Please Enter your command with Enter', 3000)
      })
      .then(() => {
        return delayMs(100)
      })
      .then(() => { //update firmware
        this.pauseParseLine = true
        ipcRenderer.send('serial-rx', 'u')
      }).then(() => {
        return delayMs(500)
      }).then(() => {
        ipcRenderer.send('select-file', this.selectedSerialPort)
      })
      .catch((err) => {
        console.warn('update firmware error:', err)
      })
      .finally(() => {
        // this.pauseParseLine = false
      })
    },
    ClearDataFn() {
      this.dialog = true
    },
    doClearDataFn() {
      this.dialog = false
      ipcRenderer.send('serial-rx', '\r\nf')
    },
    parseLine(line) {
      if (this.customParseCallback) {
        this.customParseCallback(line)
      }

      if (this.pauseParseLine) return

      let found
      found = line.match(/Device Type:\s+(\w+)/i)
      if (found) {
        console.log('found device type:', found[1])
        // this.deviceType = found[1]
        return
      }
      found = line.match(/Device EUI:\s+(\w+)/i)
      if (found) {
        console.log('found device EUI:', found[1])
        this.deviceEUI = found[1]
        this.deviceEUI2 = this.deviceEUI
        return
      }
      found = line.match(/new Device EUI is\s+(\w+)/i)
      if (found) {
        console.log('confirm device EUI written:', found[1])
        this.deviceEUI2 = found[1]
        return
      }
      found = line.match(/(App EUI|Key A):\s+(\w+)/i)
      if (found) {
        console.log('found App EUI:', found[2])
        this.appEUI = found[2]
        this.appEUI2 = this.appEUI
        return
      }
      found = line.match(/(App Key|Key B):\s+(\w+)/i)
      if (found) {
        console.log('found App Key:', found[2])
        this.appKey = found[2]
        this.appKey2 = this.appKey
        return
      }
      found = line.match(/new App Key is\s+(\w+)/i)
      if (found) {
        console.log('confirm App Key written:', found[1])
        this.appKey2 = found[1]
        return
      }
      found = line.match(/ICCID:\s+(\w+)/i)
      if (found) {
        console.log('found ICCID:', found[1])
        this.cardIccid = found[1]
        return
      }
      found = line.match(/network rssi:\s+([+-]?\w+)/i)
      if (found) {
        console.log('found RSSI:', found[1])
        this.signalRssi = found[1]
        return
      }
      found = line.match(/Data interval:\s+(\w+)/i)
      if (found) {
        console.log('found Data interval:', found[1])
        this.dataInterval = parseInt(found[1])
        this.dataInterval2 = this.dataInterval
        return
      }
      found = line.match(/Battery:\s+(\w+)%/i)
      if (found) {
        console.log('found Battery:', found[1])
        this.battery = parseInt(found[1])
        return
      }
      found = line.match(/Remote server:\s+([a-z0-9-_.]+)/i)
      if (found) {
        console.log('found remote server:', found[1])
        this.serverAddr = found[1]
        this.serverAddr2 = this.serverAddr
        this.serverPortRules = [this.rules.rangePort]
        return
      } else {
        this.serverPortRules = []
      }
      found = line.match(/Remote port:\s+(\w+)/i)
      if (found) {
        console.log('found remote port:', found[1])
        this.serverPort = parseInt(found[1])
        this.serverPort2 = this.serverPort
        return
      }
      found = line.match(/User:\s+([a-z0-9-_.]+)/i)
      if (found) {
        console.log('found username:', found[1])
        this.username = found[1]
        this.username2 = this.username
        return
      }
      found = line.match(/Passwd:\s+([a-z0-9-_.]+)/i)
      if (found) {
        console.log('found password:', found[1])
        this.password = found[1]
        this.password2 = this.password
        return
      }
      found = line.match(/GPS Switch:\s+(\w+)/i)
      if (found) {
        console.log('found GPS switch:', found[1])
        this.enableGps = found[1] === 'Y' ? true : false
        this.enableGps2 = this.enableGps
        return
      }
      found = line.match(/OTA preview:\s+(\w+)/i)
      if (found) {
        console.log('found OTA preview:', found[1])
        this.enableOtaPrepub = found[1] === 'Y' ? true : false
        this.enableOtaPrepub2 = this.enableOtaPrepub
        return
      }
      found = line.match(/Hardware version:\s+([vV0-9.]+)/i)
      if (found) {
        console.log('found Hardware version:', found[1])
        this.hwVer = found[1]
        return
      }
      found = line.match(/Software firmware:\s+([vV0-9.]+)/i)
      if (found) {
        console.log('found Software firmware:', found[1])
        this.swVer = found[1]
        return
      }

      found = line.match(/Please input 'c' to enter configuration mode/i)
      if (found) {
        console.log('found enter config mode prompt')
        if (this.connectAsConfigMode) {
          console.log('enter c automatically ...')
          ipcRenderer.send('serial-rx', 'c')
        }
        return
      }

    },
    formatLocale(locale) {
      if (locale.includes('en')) return 'en'
      else if (locale.includes('zh')) return 'zh'
      else if (locale.includes('cn')) return 'zh'
      return 'en'
    },
    versionClicked() {
      ipcRenderer.send('goto-new-version')
    },
    configModeChangedFn() {
      console.log(`connectAsConfigMode changed to: ${this.connectAsConfigMode}`)
      store.set('connectAsConfigMode', this.connectAsConfigMode)
    },
    serverAddrChangedFn() {
      if (this.serverAddr) {
        this.serverAddrRules = [this.rules.domain]
        let result = this.rules.domain(this.serverAddr)
        if (typeof result === "boolean" && result) {
          this.serverPortRules = [this.rules.rangePort]
        }
      } else {
        this.serverAddrRules = []
        this.serverPortRules = []
      }
    },
    logoClicked() {
      let self = this
      this.logoClickCnt += 1
      if (this.logoClickCnt % 20 === 0) {
        this.showHiddenCfg = true
      }
      if (this.timeoutHandler) return
      this.timeoutHandler = setTimeout(() => {
        self.logoClickCnt = 1
        self.timeoutHandler = null
        // console.log('click cnt reset to 1.')
      }, 4000)
    }
  },
  created() {
    //locale
    let chosenLocale = store.get('chosenLocale')
    if (!chosenLocale) {
      ipcRenderer.send('locale-req')
      ipcRenderer.on('locale-resp', (event, arg) => {
        console.log('local-resp:', arg)
        chosenLocale = arg
        this.$root.$i18n.locale = this.formatLocale(chosenLocale)
        this.locale = this.$root.$i18n.locale
        console.log(`locale after requested: ${this.locale}`)
      })
    } else {
      this.$root.$i18n.locale = this.formatLocale(chosenLocale)
    }
    this.locale = this.$root.$i18n.locale
    console.log(`locale when created: ${this.locale}`)

    if (this.locale === 'en') this.selectedLocaleIso = 'us'
    else if (this.locale === 'zh') this.selectedLocaleIso = 'cn'

    //config mode
    this.connectAsConfigMode = store.get('connectAsConfigMode') || false
  },
  mounted() {

    let terminalContainer = document.getElementById('terminal')
    this.term = new Terminal({
      theme: {
        background: '#ffffff',
        foreground: '#78909C',
        cursor: '#15780F',
        selection: '#76FF0344'
      },
      fontSize: 12,
      cursorBlink: true,

    })
    const fitAddon = new FitAddon()
    this.term.loadAddon(fitAddon)
    this.term.open(terminalContainer)
    fitAddon.fit()

    this.term.onData((data) => {
      // the bootloader does echo-back
      // if (data === '\r') data = '\r\n'
      // this.term.write(data)
      ipcRenderer.send('serial-rx', data)
    })

    //stream
    this.stream = new Readable({
      read: (size) => {}
    })

    //serial
    ipcRenderer.on('init-serial-resp', (event, arg) => {
      console.log('init-serial-resp:', arg)
      let {ports, selectedPort, opened} = arg
      this.serialPorts = []
      for (let p of ports) {
        this.serialPorts.push(p.path)
      }
      this.selectedSerialPort = selectedPort
      this.serialOpened = opened
    })
    ipcRenderer.send('init-serial-req')

    ipcRenderer.on('serial-open-resp', (event, arg) => {
      console.log('serial-open-resp:', arg)
      let {opened, reason} = arg
      if (opened) {
        this.serialOpened = true
      } else {
        console.error('serial open failed:', reason)
      }
    })
    ipcRenderer.on('serial-close-resp', (event, arg) => {
      console.log('serial-close-resp:', arg)
      let {closed, reason} = arg
      if (closed) {
        this.serialOpened = false

        this.updateFwLoading = false
        this.pauseParseLine = false
      } else {
        console.error('serial close failed:', reason)
      }
    })
    ipcRenderer.on('serial-tx', (event, arg) => {
      this.term.write(arg)
      this.stream.push(arg)
    })
    //parser
    const parser = this.stream.pipe(new ReadlineParser())
    parser.on('data', (line) => {
      // console.log(line, 'len:', line.length)
      this.parseLine(line)
    })
    //ota
    ipcRenderer.on('current-version-resp', (event, arg) => {
      console.log('current-version-resp:', arg)
      let {currentVersion} = arg
      this.currentVersion = currentVersion
    })
    ipcRenderer.send('current-version-req')
    //update fw
    ipcRenderer.on('update-fw-begin', (event) => {
      this.updateFwLoading = true
    })
    ipcRenderer.on('update-fw-end', (event) => {
      this.updateFwLoading = false
      this.pauseParseLine = false
    })
    ipcRenderer.on('update-available', (event, arg) => {
      console.log('update-available:', arg)
      this.newVersion = arg
      document.getElementById('versionText').style.cursor = 'pointer'
    })
  },
  beforeDestroy() {
    ipcRenderer.removeAllListeners()
  }

}
</script>
<style scoped>
.mytextarea {
  font-size: 12px;
  line-height: 12px;
}
</style>
