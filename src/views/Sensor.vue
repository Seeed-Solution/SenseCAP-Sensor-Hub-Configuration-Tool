<i18n>
{
  "en": {
    "text: connectAsConfigMode": "Enter configuration mode automatically on device's booted",
    "text: clear data confirm": "This will clear all the storaged measurements in the flash. Once confirmed, the bootloader will launch the Application Firmware and storaged measurements will be wiped out.",
    "Maximum 32 chars allowed": "Maximum 32 non-whitespace chars",
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
    "APN Username": "APN用户名",
    "APN Password": "APN密码",
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
    "Maximum 32 chars allowed": "最多32个(非空白)字符",

    "end": "结束"
  }
}
</i18n>
<template>
  <v-container fluid class="py-0" fill-height>
    <v-row class="main-body-fill-height">
      <v-col cols="12" class="pb-0" style="height: 100%;">
        <el-tabs v-model="tab" type="border-card" class="tab-body-fill-height">
          <el-tab-pane :label="$t('Customized')" class="tab-body-fill-height">
            <div class="pb-1 d-flex justify-center">
              <div class="text-subtitle-1">{{$t('Sensors')}}</div>
              <v-spacer></v-spacer>
              <el-button type="primary" size="mini" icon="el-icon-plus" round></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete" round></el-button>
            </div>
            <div class="tab-body-half">
              <el-table :data="desserts"
                height="100%" size="mini" border
                header-row-class-name="my-table-header"
                row-class-name="my-table-row"
                cell-class-name="my-table-cell"
                :empty-text="$t('empty')">
                <el-table-column prop="name" :label="$t('name')"></el-table-column>
                <el-table-column prop="calories" :label="$t('calories')"></el-table-column>
                <el-table-column prop="fat" :label="$t('fat')"></el-table-column>
                <el-table-column prop="carbs" :label="$t('carbs')"></el-table-column>
                <el-table-column prop="protein" :label="$t('protein')"></el-table-column>
                <el-table-column prop="iron" :label="$t('iron')"></el-table-column>
              </el-table>

            </div>
            <div class="pt-4 pb-1 d-flex justify-center">
              <div class="text-subtitle-1">{{$t('Measurements')}}</div>
              <v-spacer></v-spacer>
              <el-button type="primary" size="mini" icon="el-icon-plus" round></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete" round></el-button>
            </div>
            <div class="tab-body-half">
              <el-table :data="dessertsxxx"
                height="100%" size="mini" border
                header-row-class-name="my-table-header"
                row-class-name="my-table-row"
                cell-class-name="my-table-cell"
                :empty-text="$t('empty')">
                <el-table-column prop="name" :label="$t('name')"></el-table-column>
                <el-table-column prop="calories" :label="$t('calories')"></el-table-column>
                <el-table-column prop="fat" :label="$t('fat')"></el-table-column>
                <el-table-column prop="carbs" :label="$t('carbs')"></el-table-column>
                <el-table-column prop="protein" :label="$t('protein')"></el-table-column>
                <el-table-column prop="iron" :label="$t('iron')"></el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('Builtin')" class="tab-body-fill-height">
            <div class="pb-1 d-flex justify-center">
              <div class="text-subtitle-1">{{$t('Sensors')}}</div>
              <v-spacer></v-spacer>
              <el-button type="primary" size="mini" icon="el-icon-plus" round></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete" round></el-button>
            </div>
            <div class="tab-body-half">
              <el-table :data="desserts"
                height="100%" size="mini" border
                header-row-class-name="my-table-header"
                row-class-name="my-table-row"
                cell-class-name="my-table-cell"
                :empty-text="$t('empty')">
                <el-table-column prop="name" :label="$t('name')"></el-table-column>
                <el-table-column prop="calories" :label="$t('calories')"></el-table-column>
                <el-table-column prop="fat" :label="$t('fat')"></el-table-column>
                <el-table-column prop="carbs" :label="$t('carbs')"></el-table-column>
                <el-table-column prop="protein" :label="$t('protein')"></el-table-column>
                <el-table-column prop="iron" :label="$t('iron')"></el-table-column>
              </el-table>

            </div>
            <div class="pt-4 pb-1 d-flex justify-center">
              <div class="text-subtitle-1">{{$t('Measurements')}}</div>
              <v-spacer></v-spacer>
              <el-button type="primary" size="mini" icon="el-icon-plus" round
                @click="dialog=true"></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete" round></el-button>
            </div>
            <div class="tab-body-half">
              <el-table :data="dessertsxxx"
                height="100%" size="mini" border
                header-row-class-name="my-table-header"
                row-class-name="my-table-row"
                cell-class-name="my-table-cell"
                :empty-text="$t('empty')">
                <el-table-column prop="name" :label="$t('name')"></el-table-column>
                <el-table-column prop="calories" :label="$t('calories')"></el-table-column>
                <el-table-column prop="fat" :label="$t('fat')"></el-table-column>
                <el-table-column prop="carbs" :label="$t('carbs')"></el-table-column>
                <el-table-column prop="protein" :label="$t('protein')"></el-table-column>
                <el-table-column prop="iron" :label="$t('iron')"></el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </v-col>
    </v-row>
    <!-- footer -->
    <!--<v-row>-->
    <!--  <v-col cols="12" class="pa-0">-->
    <!--    <v-divider></v-divider>-->
    <!--  </v-col>-->
    <!--</v-row>-->
    <v-row>
      <v-col cols="12" class="pb-3 d-flex justify-start">
        <v-spacer></v-spacer>
        <v-btn rounded color="secondary" width="100" class="mr-5"
          @click.stop="readFn()"
          :disabled="!serialOpened">{{$t('Read')}}</v-btn>
        <v-btn rounded color="secondary" width="100" class="mr-3"
          @click.stop="writeFn()"
          :loading="writeLoading"
          :disabled="!serialOpened">{{$t('Write')}}</v-btn>
      </v-col>
    </v-row>

    <!-- dialog -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-form ref="form1">
        <v-card>
          <v-card-title>
            <span class="text-h6">{{dialogAction}} {{$t('Sensor')}}</span>
          </v-card-title>
          <v-card-text class="py-0">
            <v-row>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Modbus Address')}}</p>
                <v-text-field v-model="intervalSettings"
                  :rules="[rules.required, rules.range, rules.int]"
                  :suffix="$t('minutes')"
                  type="number"
                  outlined dense
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">
                  {{$t('Sensor Type ID')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.sensorTypeId')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">
                  {{$t('Measurement Delay')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.measDelay')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">
                  {{$t('Response Time')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.respTimeß')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-spacer></v-spacer>
            <v-btn color="primary" width="100" @click="settingsSaveFn()" :loading="dialogSettingsLoading">{{$t('OK')}}</v-btn>
            <v-btn color="secondary" width="100" @click="dialogSettings=false;selItem=null">{{$t('Cancel')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>

    <v-dialog v-model="dialog2" persistent max-width="600px">
      <v-form ref="form2">
        <v-card>
          <v-card-title>
            <span class="text-h6">{{dialogAction}} {{$t('Measurement')}}</span>
          </v-card-title>
          <v-card-text class="py-0">
            <v-row>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Measurement ID')}}</p>
                <v-text-field v-model="intervalSettings"
                  :rules="[rules.required, rules.range, rules.int]"
                  :suffix="$t('minutes')"
                  type="number"
                  outlined dense
                ></v-text-field>
              </v-col>
              <v-col cols="6"></v-col>
              <!--Read-->
              <v-col cols="12" class="py-0">
                <div class="text-subtitle-2 primary--text">{{$t('Read Function')}}</div>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Function Code')}}</p>
                <v-text-field v-model="intervalSettings"
                  :rules="[rules.required, rules.range, rules.int]"
                  :suffix="$t('minutes')"
                  type="number"
                  outlined dense
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Register Address')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.registerAddr')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
              <!--Data-->
              <v-col cols="12" class="py-0">
                <div class="text-subtitle-2 primary--text">{{$t('Value')}}</div>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Data Type')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.dataType')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Precision')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.precision')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Factor A')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.factorA')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Factor B')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.factorB')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
              <!--Write-->
              <v-col cols="12" class="py-0">
                <div class="text-subtitle-2 primary--text">{{$t('Write Function')}}</div>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Write Strategy')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.dataType')}}</span>
                  </v-tooltip>
                </p>
                <v-select :items="priorityItems" v-model="prioritySettings"
                  :rules="[rules.required]"
                  outlined dense
                ></v-select>
              </v-col>
              <v-col cols="6" class="py-0">
                <p class="text-subtitle-2 font-weight-light ma-0">{{$t('Command in Hex')}}
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon class="text-caption" v-on="on" v-bind="attrs">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>{{$t('helpInfo.cmdInHex')}}</span>
                  </v-tooltip>
                </p>
                <v-text-field v-model="apnPassword"
                  :rules="[rules.char32AllowEmtpy]"
                  outlined dense>
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-spacer></v-spacer>
            <v-btn color="primary" width="100" @click="settingsSaveFn()" :loading="dialogSettingsLoading">{{$t('OK')}}</v-btn>
            <v-btn color="secondary" width="100" @click="dialogSettings=false;selItem=null">{{$t('Cancel')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.main-body-fill-height {
  height: calc(100% - 60px);
}
.tab-body-fill-height {
  /*height: calc(100% - 40px);*/
  height: 100%;
}
.tab-body-plus-height {
  height: calc(100% + 40px);
  /*height: 100%;*/
}
.tab-body-half {
  height: calc(50% - 40px);
  /*height: 50%;*/
}

</style>
<style>
.el-tabs__content {
  height: calc(100% - 40px);
}
.my-table-header th {
  background-color: #F4F8FF !important;
  color: rgba(0, 0, 0, 0.7) !important;
}
.my-table-row {

}
.my-table-cell {
  padding: 3px 0 !important;
}
</style>

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
        if (value) return (/^\S{1,32}$/i.test(value)) || this.$t("Maximum 32 chars allowed")
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
      //global
      tab: 0,  //tab index, from 0
      //loading
      writeLoading: false,
      updateFwLoading: false,
      clearCacheLoading: false,
      //serial
      selectedSerialPort: null,
      serialPorts: [],
      serialOpened: false,
      connectAsConfigMode: false,
      showHiddenCfg: false,
      //table
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb2',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut2',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat2',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
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
      apn: '',
      apn2: '',
      apnUsername: '',
      apnUsername2: '',
      apnPassword: '',
      apnPassword2: '',
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
      dialog2: null,
      dialogAction: "Add",
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
      let needUpdateApn = (this.apn !== this.apn2)
      let needUpdateApnUsername = (this.apnUsername !== this.apnUsername2)
      let needUpdateApnPassword = (this.apnPassword !== this.apnPassword2)
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
        needUpdateOta: needUpdateOta,
        needUpdateApn: needUpdateApn,
        needUpdateApnUsername: needUpdateApnUsername,
        needUpdateApnPassword: needUpdateApnPassword
      })

      if (!(needUpdateDeviceEUI || needUpdateAppEUI || needUpdateAppKey || needUpdateDataInterval ||
            needUpdateServerAddr || needUpdateServerPort || needUpdateUsername || needUpdatePassword ||
            needUpdateGPS || needUpdateOta || needUpdateApn || needUpdateApnUsername || needUpdateApnPassword)) {
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
      .then(() => { //APN
        if (needUpdateApn) return this.writeOne('w', this.apn, 'New APN', 2000)
      })
      .then(() => { //APN username
        if (needUpdateApnUsername) return this.writeOne('y', this.apnUsername, 'New APN username', 2000)
      })
      .then(() => { //APN password
        if (needUpdateApnPassword) return this.writeOne('z', this.apnPassword, 'New APN password', 2000)
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
      found = line.match(/APN:\s+(\w+)/i)
      if (found) {
        console.log('found APN:', found[1])
        this.apn = found[1]
        this.apn2 = this.apn
        return
      }
      found = line.match(/APN username:\s+(\w+)/i)
      if (found) {
        console.log('found APN username:', found[1])
        this.apnUsername = found[1]
        this.apnUsername2 = this.apnUsername
        return
      }
      found = line.match(/APN password:\s+(\w+)/i)
      if (found) {
        console.log('found APN password:', found[1])
        this.apnPassword = found[1]
        this.apnPassword2 = this.apnPassword
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
    //
    // let terminalContainer = document.getElementById('terminal')
    // this.term = new Terminal({
    //   theme: {
    //     background: '#ffffff',
    //     foreground: '#78909C',
    //     cursor: '#15780F',
    //     selection: '#76FF0344'
    //   },
    //   fontSize: 12,
    //   cursorBlink: true,
    //
    // })
    // const fitAddon = new FitAddon()
    // this.term.loadAddon(fitAddon)
    // this.term.open(terminalContainer)
    // fitAddon.fit()
    //
    // this.term.onData((data) => {
    //   // the bootloader does echo-back
    //   // if (data === '\r') data = '\r\n'
    //   // this.term.write(data)
    //   ipcRenderer.send('serial-rx', data)
    // })

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

