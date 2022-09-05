const C = {
    data() {
        return {
            message: '〇〇',
            Saikoros: [
                'image/def.png',
                'image/def.png',
                'image/def.png'
            ]
        }
    },
    methods: {
        async Saikoro() {
            function deme(deme) {
                if (deme == '111') {
                    return 'ピンゾロ,5倍'
                } else if (["456", "465", "564", "546", "654", "645"].includes(deme)) {
                    return 'シゴロ,2倍'
                } else if (['222', '333', '444', '555', '666'].includes(deme)) {
                    return 'ゾロ目,3倍'
                } else if (["116", "161", "611", "226", "262", "622", "336", "363", "633", "446", "464", "644", "556", "565", "655"].includes(deme)) {
                    return '6'
                } else if (["115", "151", "511", "225", "252", "522", "335", "353", "533", "445", "454", "544", "665", "656", "566", ].includes(deme)) {
                    return '5'
                } else if (["114", "141", "411", "224", "242", "422", "334", "343", "433", "554", "545", "455", "664", "646", "466"].includes(deme)) {
                    return '4'
                } else if (["113", "131", "311", "223", "232", "322", "443", "434", "344", "553", "535", "355", "663", "636", "366"].includes(deme)) {
                    return '3'
                } else if (["112", "121", "211", "332", "323", "233", "442", "424", "244", "552", "525", "255", "662", "626", "266"].includes(deme)) {
                    return '2'
                } else if (["122", "221", "212", "331", "313", "133", "441", "414", "144", "551", "515", "155", "661", "616", "166"].includes(deme)) {
                    return '1'
                } else if (["123", "132", "213", "231", "312", "321"].includes(deme)) {
                    return '123,2倍払い'
                } else {
                    return '無し'
                }
            }
            this.message = '〇〇'

            function delay(n) {
                return new Promise(function (resolve) {
                    setTimeout(resolve, n * 1000);
                });
            }
            res = []
            for (i = 0; i < 3; i++) {
                this.Saikoros[i] = 'image/def2.png'
                let random = Math.floor(Math.random() * 6) + 1;
                res.push(random)
            }
            await delay(0.5);
            this.Saikoros[0] = 'image/' + res[0] + '.png';
            await delay(0.7);
            this.Saikoros[1] = 'image/' + res[1] + '.png';
            await delay(1);
            this.Saikoros[2] = 'image/' + res[2] + '.png';
            this.message = deme(res.join(''))
        }
    }
}

Vue.createApp(C).mount('#Chinchirorin')
