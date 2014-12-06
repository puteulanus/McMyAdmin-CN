Messages = {
    /*
    Dynamic Messages.

    These are messages that are shown in response to cetain events.
    The text value in the quotes can simply be replaced. Do not change
    the text before the :
    */
    Title_Welcome: "欢迎来到McMyAdmin 2",
    Message_Welcome: "McMyAdmin2使您更方便的管理Minecraft服务器。<br/><br/>MyMyAdmin的Twitter： <a href=\"https://twitter.com/#!/MCMAUpdates\">@MCMAUpdates</a> 可以使您了解最新的更新信息。<br/><br/>在设置选项中设置您的服务器，然后在状态选项中开启服务器。<br/><br/>感谢使用McMyAdmin 2!",

    Status: "状态",
    Welcome: "欢迎",
    Enabled: "开启",
    Disabled: "关闭",

    IncorrectLogin: "用户名或密码错误",
    LoginExpired: "登陆过期，请重新登录",
    TooManyBadLogins: "密码错误次数太多，请在2分钟后再试",
    ServerContactErr: "无法连接到服务器 {0}<br/> 快去找网管解决这个问题！",
    LoginMessage: "登陆中请稍候",
    LoginSlow: "登陆好慢啊喵~",
    LoginDone: "验证成功，加载数据中...",
    LoggedinAs: "登录到： '{0}'",
    EnterpriseOwner: "{0} | <a href=\"{1}\">网站</a> | <a href=\"{2}\">帮助</a>",
    ProvidedBy: "供应商 <a href=\"{1}\">{0}</a>",
    RAMUsage: "{0}/{1}MB",
    SearchBoxPlugins: "搜索bukkit插件中",

    ServerNotRunning: "服务器没有运行",
    ServerStarting: "服务器启动中...",
    ServerReady: "服务器正常开启中",
    ServerRestarting: "服务器重启中",
    ServerRestartingShort: "服务器重启中",
    ServerShutdown: "服务器关闭中...",
    ServerError: "服务器无法正常开启",
    ServerSleeping: "服务器休眠中",
    ServerWaitBackend: "连接丢失，重连中...<br/>{0} / {1} 次...",

    Text_PickColor: "使用6位颜色代码，不包含#, 例如 440000 为深红",
    Text_Uptime: "开启时间: {0} 天, {1} 小时, {2} 分钟",
    Text_OffsetMins: "服务器计划被推迟了 {0} 分钟",

    ParamMessage: "信息",
    ParamCommand: "指令",
    ParamExec: "可执行文件",
    ParamRAM: "最大内存 (MB)",

    ScheduleRunNow: "现在执行",
    ScheduleDelete: "删除",

    BackupRunning: "备份中...",
    BackupUnavailable: "备份失败",
    BackupDeleteTitle: "确认删除备份",
    BackupDeleteWarning: "你确定要删除这个备份？<br/><br/><span class='bold'>此项操作无法恢复</span>",
    BackupRestoreTitle: "确认恢复备份",
    BackupRestoreText: "恢复备份会直接覆盖，新产生的游戏区域会保留。<br/><br/>Do you wish to continue?",
    BackupRestoreRunning: "还原备份中...",
    BackupNameTitle: "备份失败",
    BackupNameMessage: "名称不可识别",

    EventSaveWorldState: "保存地图中",
    EventRestartServer: "重启服务器",
    EventRestartEmptyServer: "如果服务器没有玩家则重启",
    EventRestartRAM: "重启当内存大于 {0}MB",
    EventStopServer: "关闭服务器",
    EventStartServer: "开启服务器",

    ErrorIncorrectUsage: "使用错误",
    ErrorIncorrectUsageText: "你不应该打开这个文件，而应该使用网页链接。<br/><br/>如果本机连接服务器，默认地址是 <a href='http://localhost:8080'>http://localhost:8080</a> 但是要先运行McMyAdmin<br/><br/>如果是异地登录，你需要使用IP",

    ErrorCommunicatingTitle: "连接错误",
    ErrorCommunicatingText: "McMyAdmin无法连接到服务器，可能造成这项错误的原因有:<ul><li>The server is offline for maintainence</li><li>The McMyAdmin Backend is not responding</li><li>A network issue is preventing your computer contacting the backend server</li></ul>Check your connection to the server then log in again.",
    UserLoggedOutTitle: "登录已失效",
    UserLoggedOutMessage: "McMyAdmin正在重启，您已经被注销。<br/><br/>稍后重新登录即可。<br/><br/>如果您在登陆的时候看到此条信息，您的服务器时间可能不正确。",
    WarningResetSchedule: "重设服务器计划",
    WarningResetScheduleText: "这将删除所有的计划并恢复默认。<br/><br/><span class='bold'>此项操作无法恢复</span>",

    RequestErrorTitle: "操作失败",

    WarningOfflineTitle: "服务器处于离线模式！",
    WarningOfflineMessage: "离线模式的服务器可以让任何人以任何名字登录，注册小号，并且不会在游戏服务器列表中显示。",
    
    PluginChangeStateTitle: "无法开启/关闭插件",
    PluginChangeStateMessage: "在服务器启动或关闭时不可以这样操作。",
    
    RunningTasks: "运行中： ({0})",
    Notifications: "信息： ({0})",
    TipOfTheDay: "每日提示",

    Title_iDevice: "苹果设备 {0} ",
    Message_iDevice: "使用McMyAdmin苹果版可以更方便的管理服务器 {0}<br/><br/>点击这里前往AppStore<br/><span class='tiny'>这将不会再显示</span>",

    Title_UnsupportedBrowser: "不支持浏览器",
    Message_UnsupportedBrowser: "McMyAdmin 2 does not support Internet Explorer 8 or older. Please upgrade to Internet Explorer 9, or use an alternate browser.",

    GroupSettings: "设置组 {0}/{1}",
    GroupDeleteTitle: "确定删除组",
    GroupDeleteMessage: "你确定要删除组 '{0}'?<br/><br/><span class='bold'>此项操作无法恢复！</span>",

    GroupRenameTitle: "群组已重命名",
    GroupRenameMessage: "群组已被重命名，如果任何组继承本组，则需要重新设置。",
    
    Title_FeatureUnavailable: "无此项功能",
    Message_FeatureUnavailable: "这项功能尚未开启，在后续版本会补充。",

    Title_ExportWarning: "覆盖警告",
    Message_ExportWarning: "自动导出权限文件会 <span class='bold'>覆盖</span> 现在的权限文件。<br/><br/>McMyAdmin 不可以直接阅读生成的权限文件。强烈建议 <span class='bold'>备份</span> 已经生成的权限文件。<br/><br/>任何非经过McMyAdmin的权限操作都会被覆盖。<br/><br/>是否继续？",

    Title_AccessDenied: "禁止访问",
    Message_AccessDenied: "你的权限不足，无法完成此项操作。",

    Title_UserNoModify: "无法修改",
    Message_UserNoModify: "McMyAdmin自带的用户无法修改<br/><br/>这个用户是程序内部使用的。",

    Title_BukkitVersionWarn: "暂无稳定版Bukkit",
    Message_BukkitVersionWarn: "<span class='bold'>这个版本的稳定版Bukkit还没有放出 {0}.</span><br/><br/>只有官服，版本为 {1}<br/><br/>这时候安装Bukkit，会使您的Minecraft服务器版本变为 {1}<br/><br/>详情见 <a href='http://www.bukkit.org'>http://www.bukkit.org/</a> for more information on when a new version will be available.<br/><br/>Are you sure you want to install CraftBukkit at this time?",
    
    Title_UpdateAvailable: "更新可用",
    Title_MCMAUpdate: "McMyAdmin {0} 更新现在可以安装了",
    Title_MinecraftUpdate: "Minecraft服务器 {0} 现在可以安装了",

    Title_SettingChanged: "设置变更",
    Message_SettingChanged: "设定 '{0}' 设为了 '{1}' 。",

    Title_UpdatingMC: "升级Minecraft服务器中",
    Title_UpdatingCB: "升级bukkit中",
    Title_ErrorUpdate: "升级失败",
    Message_ErrorUpdate: "现在无法升级，请稍后再试",
    Title_UpdateComplete: "升级成功",
    Message_UpdateComplete: "服务器已经是最新版本了",
    Title_UpdatingMCMA: "升级 McMyAdmin",
    Message_UpdatingMCMA: "McMyAdmin升级中，60秒后页面即将刷新。<br/><br/>如果浏览器白屏，请清理cookies",

    Title_NoPassMatch: "密码不同",
    Message_NoPassMatch: "两次输入的密码不同，请重试",

    Title_NoPass: "密码错误",
    Message_NoPass: "密码不可以留空",

    Title_InvalidUser: "用户名错误",
    Message_InvalidUser: "用户名不可以留空",

    Title_NoCurrentUser: "无法设置",
    Message_NoCurrentUser: "请在页面上方“修改密码”处修改。",

    Title_PassChanged: "密码修改成功",
    Message_PassChanged: "修改后的密码将在下次登陆时生效。",

    Title_IncorrectPassword: "密码错误",
    Message_IncorrectPassword: "输入的密码不正确，请重试。",
    
    Title_DeleteUser: "用户删除",
    Message_DeleteUser: "你确定删除用户 '{0}'? 用户将在他登出后删除。<br/><br/><span class='bold'>此操作不可逆。</span>",
    
    Title_DeleteWorld: "世界删除",
    Message_DeleteWorld: "你确定删除这个世界？即使这个世界不再用，但是也建议做一下备份。<br/><br/><span class='bold'>此操作不可逆</span>",
    
    Title_NotSupportedInVersion: "此操作暂时不可用",
    Message_MultiUserPersonal: "只有购买并输入激活码，才可以使用多用户。",
    
    Title_InvalidLicence: "激活码不正确",
    Message_InvalidLicence: "这个激活码不正确，请确保包含了电子邮箱。例如：<br/><br/>dummy@sample.com:PR12-3456-7890-1234-5678<br/><br/>请再试。",
    
    Title_LicenceAdded: "激活码添加成功",
    Message_LicenceAdded: "产品激活成功<br/><br/>感谢您购买McMyAdmin!",

    Title_WeakPassword: "密码太弱",
    Message_WeakPassword: "强度大的密码包含数字，字母和特殊符号。请勿使用常用密码。",
    
    Title_UploadOK: "文件已上传",
    Message_BackupUploaded: "备份上传成功。",
    
    Title_WidgetCopy: "将以下的html编码放在相应的位置上。",

    Title_LostPW: "不知道用户名？",
    Message_LostPW: "默认的用户名和密码是admin，admin。<br/><br/>如果您租用了服务器，您需要联系相应经销商。",

    Title_InvalidUsage: "使用错误",
    Message_Incorrect: "你应该使用网页链接，而不是打开这个文件。",

    Title_MustChange: "修改密码",
    Message_MustChange: "密码过弱，请修改密码。",

    PasswordStrengthRatings: [ "没写", "弱爆", "太弱", "很弱", "还行", "不错", "很强", "吊炸" ]
};

LocalizedText = {
    /*
    Translatable UI elements.

    Syntax: "original text" : "translated text",
    E.g. "Preferences" : "Préférences",

    Don't forget the , at the end of the line!
    */
};

EventTriggerNames = {
    1: "McMyAdmin 开启",
    10: "玩家加入游戏",
    20: "玩家离开游戏",
    30: "用户组变更",
    40: "备份完成",
    42: "备份失败",
    50: "服务器开启",
    60: "服务器关闭",
    70: "服务器崩溃",
    80: "用户登陆了McMyAdmin",
};old.English.js
