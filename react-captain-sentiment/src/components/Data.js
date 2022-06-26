const movieData = [
    {
        id: 1,
        movieName: "Black Panther",
        movieYear: "2018",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.2225', '0.1722', '0.2600', '0.1727', '0.2871', '0.2096', '0.1884', '0.0156', '0.1824', '0.1611', '0.2413', '0.0704', '0.1004', '0.1824', '0.3703'],
        lengthData: ['528', '1056', '1584', '2112', '2640', '3168', '3696', '4224', '4752', '5280', '5808', '6336', '6864', '7392', '7920'],
        subjectivty: ['0.5322', '0.5731', '0.4889', '0.5435', '0.5224', '0.4324', '0.4770', '0.4818', '0.5853', '0.5575', '0.6307', '0.5745', '0.4912', '0.5970', '0.4508'],
        primaryColor: '#664EAE',
        secondColor: '#C4A8FF',
    },
    {
        id: 2,
        movieName: "Morbius",
        movieYear: "2022",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1780', '0.0288', '0.2100', '-0.0085', '0.0461', '0.1206', '-0.0885', '0.0487', '0.0026', '0.0452', '0.0501', '0.1790', '0.1265', '0.1429', '0.0884'],
        lengthData: ['422', '844', '1266', '1688', '2110', '2532', '2954', '3376', '3798', '4220', '4642', '5064', '5486', '5908', '6330'],
        subjectivty: ['0.4130', '0.3415', '0.4961', '0.5939', '0.6197', '0.4533', '0.6610', '0.6092', '0.5981', '0.4943', '0.6086', '0.6268', '0.5341', '0.5530', '0.5353'],
    },
    {
        id: 3,
        movieName: "Ant-Man",
        movieYear: "2015",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1870', '0.1588', '0.0943', '0.1543', '0.0150', '0.1351', '0.0229', '0.0382', '0.0833', '0.1101', '0.2431', '0.1684', '0.1942', '0.0596', '0.0152'],
        lengthData: ['629', '1258', '1887', '2516', '3145', '3774', '4403', '5032', '5661', '6290', '6919', '7548', '8177', '8806', '9435'],
        subjectivty: ['0.5376', '0.6157', '0.5629', '0.5435', '0.5327', '0.5293', '0.4656', '0.5357', '0.4870', '0.5596', '0.5833', '0.5746', '0.6397', '0.6181', '0.6071'],
    },
    {
        id: 4,
        movieName: "Black Widow",
        movieYear: "2021",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1343', '0.0057', '0.1320', '0.0653', '0.0989', '0.1525', '0.0363', '0.0867', '0.2921', '0.2444', '-0.0009', '0.1256', '-0.0193', '0.0618', '0.1068'],
        lengthData: ['572', '1144', '1716', '2288', '2860', '3432', '4004', '4576', '5148', '5720', '6292', '6864', '7436', '8008', '8580'],
        subjectivty: ['0.4528', '0.3060', '0.4859', '0.4024', '0.5763', '0.4142', '0.4222', '0.4700', '0.5617', '0.5247', '0.4533', '0.5473', '0.5612', '0.5703', '0.4970'],
    },
    {
        id: 5,
        movieName: "Eternals",
        movieYear: "2021",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.0944', '0.1014', '0.0934', '0.1786', '0.2632', '0.2481', '0.0505', '0.1219', '0.0748', '0.0556', '0.1724', '0.1053', '0.1110', '0.0670', '0.0440'],
        lengthData: ['702', '1404', '2106', '2808', '3510', '4212', '4914', '5616', '6318', '7020', '7722', '8424', '9126', '9828', '10530'],
        subjectivty: ['0.5451', '0.5827', '0.5370', '0.5264', '0.5920', '0.6687', '0.5749', '0.5792', '0.4906', '0.6088', '0.5634', '0.5607', '0.5839', '0.5694', '0.6160'],
    },
    {
        id: 6,
        movieName: "The Avengers",
        movieYear: "2012",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1688', '0.0277', '-0.0020', '0.0162', '0.1436', '0.0895', '0.1218', '0.1253', '-0.0622', '0.0127', '-0.0005', '0.1800', '0.1724', '-0.0201', '0.0994'],
        lengthData: ['684', '1368', '2052', '2736', '3420', '4104', '4788', '5472', '6156', '6840', '7524', '8208', '8892', '9576', '10260'],
        subjectivty: ['0.6009', '0.5496', '0.4834', '0.5725', '0.5049', '0.6388', '0.5739', '0.6091', '0.5378', '0.5110', '0.4885', '0.4330', '0.4522', '0.5966', '0.5882'],
    },
    {
        id: 7,
        movieName: "Thor",
        movieYear: "2011",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.2298', '0.0323', '-0.0264', '0.1005', '0.0994', '0.1589', '0.1019', '0.0573', '0.0596', '0.0761', '0.1227', '0.1422', '0.0497', '0.2350', '0.3361'],
        lengthData: ['455', '910', '1365', '1820', '2275', '2730', '3185', '3640', '4095', '4550', '5005', '5460', '5915', '6370', '6825'],
        subjectivty: ['0.5245', '0.5181', '0.4071', '0.5585', '0.5620', '0.5706', '0.6792', '0.5756', '0.4944', '0.7282', '0.5916', '0.6964', '0.5825', '0.6370', '0.6660'],
    },
    {
        id: 8,
        movieName: "Iron Man 3",
        movieYear: "2013",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.2628', '0.0934', '0.2423', '0.0493', '0.0976', '0.0924', '0.0280', '0.1184', '0.2121', '0.1053', '0.0516', '0.1435', '0.1793', '0.1613', '0.0988'],
        lengthData: ['810', '1620', '2430', '3240', '4050', '4860', '5670', '6480', '7290', '8100', '8910', '9720', '10530', '11340', '12150'],
        subjectivty: ['0.5659', '0.4666', '0.5572', '0.6000', '0.5046', '0.5632', '0.5571', '0.5982', '0.5790', '0.5243', '0.4715', '0.5917', '0.5583', '0.5846', '0.6383'],
    },
    {
        id: 9,
        movieName: "Spider-Man Homecoming",
        movieYear: "2017",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1043', '0.1026', '0.2021', '0.1990', '0.1822', '0.0765', '0.1787', '0.1578', '0.1758', '0.0182', '0.1462', '0.1649', '0.3124', '0.1060', '0.1770'],
        lengthData: ['832', '1664', '2496', '3328', '4160', '4992', '5824', '6656', '7488', '8320', '9152', '9984', '10816', '11648', '12480'],
        subjectivty: ['0.5867', '0.6217', '0.5719', '0.6149', '0.5158', '0.6350', '0.5247', '0.6277', '0.4973', '0.5804', '0.5232', '0.6123', '0.6223', '0.5831', '0.4721'],
    },
    {
        id: 10,
        movieName: "Avengers Endgame",
        movieYear: "2019",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1687', '0.0847', '0.0544', '0.0568', '0.1230', '0.1545', '0.0243', '0.1584', '0.1106', '0.0003', '0.0728', '0.1821', '0.2361', '0.0268', '0.1911'],
        lengthData: ['754', '1508', '2262', '3016', '3770', '4524', '5278', '6032', '6786', '7540', '8294', '9048', '9802', '10556', '11310'],
        subjectivty: ['0.4877', '0.5161', '0.5356', '0.5287', '0.6171', '0.5874', '0.5039', '0.5454', '0.5807', '0.4717', '0.4929', '0.5504', '0.5111', '0.5117', '0.5895'],
    },
    {
        id: 11,
        movieName: "The Incredible Hulk",
        movieYear: "2008",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1659', '-0.1961', '0.0040', '0.1809', '0.1955', '0.2184', '0.1213', '0.1708', '0.1538', '0.1036', '0.1277', '0.1917', '-0.2025', '0.1598', '-0.0426'],
        lengthData: ['313', '626', '939', '1252', '1565', '1878', '2191', '2504', '2817', '3130', '3443', '3756', '4069', '4382', '4695'],
        subjectivty: ['0.4227', '0.6089', '0.4847', '0.5577', '0.5831', '0.4008', '0.5307', '0.5194', '0.3308', '0.5205', '0.5841', '0.5679', '0.7100', '0.5087', '0.6004'],
    },
    {
        id: 12,
        movieName: "Avengers Infinity War",
        movieYear: "2018",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['-0.0158', '0.1558', '0.1280', '0.0023', '0.0187', '0.1357', '0.2338', '0.0793', '0.0778', '0.0200', '0.1783', '0.1745', '0.1060', '0.2073', '0.0621'],
        lengthData: ['599', '1198', '1797', '2396', '2995', '3594', '4193', '4792', '5391', '5990', '6589', '7188', '7787', '8386', '8985'],
        subjectivty: ['0.4749', '0.5179', '0.5585', '0.6209', '0.6523', '0.6892', '0.5920', '0.4645', '0.5627', '0.5820', '0.4810', '0.5304', '0.4541', '0.5630', '0.4924'],
    },
    {
        id: 13,
        movieName: "Avengers Age of Ultron",
        movieYear: "2015",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.0236', '0.1751', '-0.0143', '0.0426', '-0.1136', '-0.0956', '0.0109', '0.1469', '0.0282', '0.0621', '0.0555', '0.0562', '0.1179', '0.1270', '0.0870'],
        lengthData: ['753', '1506', '2259', '3012', '3765', '4518', '5271', '6024', '6777', '7530', '8283', '9036', '9789', '10542', '11295'],
        subjectivty: ['0.5088', '0.5077', '0.6012', '0.6520', '0.6063', '0.4901', '0.5265', '0.5261', '0.5889', '0.4749', '0.5658', '0.5354', '0.4711', '0.5590', '0.5167'],
    },
    {
        id: 14,
        movieName: "Captain Marvel",
        movieYear: "2019",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.0663', '0.1912', '0.2194', '0.1088', '0.0679', '0.3022', '0.2191', '0.0975', '0.2123', '0.0541', '0.0908', '0.1912', '0.0971', '0.2727', '0.3061'],
        lengthData: ['508', '1016', '1524', '2032', '2540', '3048', '3556', '4064', '4572', '5080', '5588', '6096', '6604', '7112', '7620'],
        subjectivty: ['0.4516', '0.5751', '0.5324', '0.5841', '0.5208', '0.6314', '0.5488', '0.4469', '0.5896', '0.4801', '0.5083', '0.5391', '0.4846', '0.5781', '0.5701'],
    },
    {
        id: 15,
        movieName: "Iron Man 2",
        movieYear: "2010",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.2062', '0.0826', '0.1425', '0.1399', '0.2072', '0.1574', '0.1163', '0.1685', '0.2895', '0.1973', '0.0988', '0.1859', '0.1595', '0.1450', '0.1620'],
        lengthData: ['754', '1508', '2262', '3016', '3770', '4524', '5278', '6032', '6786', '7540', '8294', '9048', '9802', '10556', '11310'],
        subjectivty: ['0.5627', '0.5289', '0.5088', '0.5850', '0.5641', '0.5386', '0.5916', '0.6684', '0.5879', '0.5206', '0.5524', '0.5448', '0.5191', '0.5408', '0.5715'],
    },
    {
        id: 16,
        movieName: "Guardians of the Galaxy",
        movieYear: "2014",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.2152', '-0.2131', '-0.1030', '0.0177', '0.1202', '0.1091', '0.0869', '0.0340', '0.1482', '0.0228', '-0.0134', '-0.0095', '-0.0720', '-0.2236', '0.1019'],
        lengthData: ['537', '1074', '1611', '2148', '2685', '3222', '3759', '4296', '4833', '5370', '5907', '6444', '6981', '7518', '8055'],
        subjectivty: ['0.4689', '0.6270', '0.5798', '0.4853', '0.5257', '0.6044', '0.5732', '0.5626', '0.5966', '0.4264', '0.5133', '0.4653', '0.5954', '0.6475', '0.5794'],
    },
    {
        id: 17,
        movieName: "Captain America The Winter Soldier",
        movieYear: "2014",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1574', '0.3273', '0.1365', '0.0571', '0.1750', '0.0817', '0.0315', '0.0328', '0.0724', '0.2707', '0.0231', '0.1381', '0.0546', '0.0667', '0.1763'],
        lengthData: ['591', '1182', '1773', '2364', '2955', '3546', '4137', '4728', '5319', '5910', '6501', '7092', '7683', '8274', '8865'],
        subjectivty: ['0.4470', '0.7104', '0.4893', '0.5367', '0.5483', '0.5302', '0.5549', '0.4870', '0.5198', '0.5904', '0.5247', '0.6181', '0.5893', '0.4706', '0.3767'],
    },
    {
        id: 18,
        movieName: "Thor Ragnarok",
        movieYear: "2017",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.0493', '0.0129', '0.2115', '0.3181', '0.1357', '0.0536', '0.2625', '0.0224', '-0.1274', '0.1990', '0.0056', '0.3250', '0.2196', '0.1080', '0.0993'],
        lengthData: ['615', '1230', '1845', '2460', '3075', '3690', '4305', '4920', '5535', '6150', '6765', '7380', '7995', '8610', '9225'],
        subjectivty: ['0.4781', '0.5874', '0.6350', '0.6707', '0.5802', '0.5381', '0.5982', '0.5920', '0.6835', '0.5679', '0.6104', '0.5732', '0.5660', '0.6262', '0.5800'],
    },
    {
        id: 19,
        movieName: "Shang-Chi and the Legend of the Ten Rings",
        movieYear: "2021",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1013', '0.0484', '-0.0478', '0.1297', '0.1152', '0.0206', '0.0790', '0.1897', '0.0770', '0.1068', '-0.0217', '-0.1195', '-0.0947', '0.0100', '0.2588'],
        lengthData: ['613', '1226', '1839', '2452', '3065', '3678', '4291', '4904', '5517', '6130', '6743', '7356', '7969', '8582', '9195'],
        subjectivty: ['0.5502', '0.5445', '0.5359', '0.4878', '0.4894', '0.4201', '0.5380', '0.5066', '0.5456', '0.5726', '0.5243', '0.4652', '0.5859', '0.6006', '0.6945'],
    },
    {
        id: 20,
        movieName: "Spider-Man No Way Home",
        movieYear: "2021",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.0989', '0.1800', '0.1598', '0.0493', '0.1160', '0.0466', '-0.0048', '0.0906', '0.1162', '0.2195', '0.1921', '0.2181', '0.1582', '0.2880', '0.1963'],
        lengthData: ['791', '1582', '2373', '3164', '3955', '4746', '5537', '6328', '7119', '7910', '8701', '9492', '10283', '11074', '11865'],
        subjectivty: ['0.6077', '0.5165', '0.6176', '0.5538', '0.5648', '0.5478', '0.5469', '0.4589', '0.6090', '0.5233', '0.6295', '0.5496', '0.5065', '0.5726', '0.6007'],
    },
    {
        id: 21,
        movieName: "Iron Man",
        movieYear: "2008",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1876', '0.2106', '0.1543', '0.2156', '0.1391', '0.2231', '0.1656', '0.1820', '0.2034', '0.1002', '0.0329', '0.0317', '0.1445', '0.2002', '0.1343'],
        lengthData: ['667', '1334', '2001', '2668', '3335', '4002', '4669', '5336', '6003', '6670', '7337', '8004', '8671', '9338', '10005'],
        subjectivty: ['0.6067', '0.5317', '0.6067', '0.5749', '0.5061', '0.5310', '0.5371', '0.5537', '0.5220', '0.5237', '0.4735', '0.5780', '0.5476', '0.6274', '0.6339'],
    },
    {
        id: 22,
        movieName: "Thor The Dark World",
        movieYear: "2013",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['-0.0076', '0.1074', '0.1548', '0.1942', '-0.0027', '-0.0045', '0.1177', '-0.0332', '-0.0135', '0.2261', '0.3075', '0.0599', '0.0820', '0.1913', '0.3691'],
        lengthData: ['420', '840', '1260', '1680', '2100', '2520', '2940', '3360', '3780', '4200', '4620', '5040', '5460', '5880', '6300'],
        subjectivty: ['0.6335', '0.4675', '0.5393', '0.6199', '0.6102', '0.4979', '0.6443', '0.4966', '0.4086', '0.5697', '0.7161', '0.6241', '0.4875', '0.6303', '0.6065'],
    },
    {
        id: 23,
        movieName: "Spider-Man Far from Home",
        movieYear: "2019",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1478', '0.0257', '0.2462', '0.1420', '0.1436', '0.1507', '0.3009', '0.1238', '0.2425', '0.2084', '0.1926', '0.2314', '0.3076', '0.2013', '0.2555'],
        lengthData: ['760', '1520', '2280', '3040', '3800', '4560', '5320', '6080', '6840', '7600', '8360', '9120', '9880', '10640', '11400'],
        subjectivty: ['0.5566', '0.5735', '0.5850', '0.5417', '0.5877', '0.5702', '0.5461', '0.5617', '0.5739', '0.5606', '0.6133', '0.5503', '0.5352', '0.6134', '0.5944'],
    },
    {
        id: 24,
        movieName: "Captain America Civil War",
        movieYear: "2016",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1338', '0.0710', '0.0352', '0.0935', '0.0743', '0.0585', '0.0078', '0.0993', '0.1634', '0.0560', '0.1502', '0.0582', '0.0331', '0.0544', '0.1863'],
        lengthData: ['722', '1444', '2166', '2888', '3610', '4332', '5054', '5776', '6498', '7220', '7942', '8664', '9386', '10108', '10830'],
        subjectivty: ['0.5247', '0.5317', '0.4925', '0.6036', '0.5473', '0.4351', '0.5326', '0.4271', '0.6128', '0.5979', '0.5450', '0.4971', '0.5053', '0.5511', '0.4989'],
    },
    {
        id: 25,
        movieName: "Guardians of the Galaxy Vol. 2",
        movieYear: "2017",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.1441', '0.0199', '-0.0065', '0.0950', '0.0590', '0.0896', '0.1450', '-0.0052', '0.1725', '0.2026', '0.0629', '0.1115', '0.0931', '0.2135', '0.0410'],
        lengthData: ['623', '1246', '1869', '2492', '3115', '3738', '4361', '4984', '5607', '6230', '6853', '7476', '8099', '8722', '9345'],
        subjectivty: ['0.5494', '0.6547', '0.6574', '0.5559', '0.5953', '0.5956', '0.5573', '0.6455', '0.5691', '0.5720', '0.6180', '0.5498', '0.5500', '0.6298', '0.6481'],
    },
    {
        id: 26,
        movieName: "Doctor Strange in the Multiverse of Madness",
        movieYear: "2022",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.3244', '0.1108', '0.1604', '0.4307', '0.0869', '0.0729', '0.0625', '0.1094', '0.1520', '0.0280', '-0.0570', '0.0636', '0.1546', '0.2524', '0.3808'],
        lengthData: ['411', '822', '1233', '1644', '2055', '2466', '2877', '3288', '3699', '4110', '4521', '4932', '5343', '5754', '6165'],
        subjectivty: ['0.6235', '0.5649', '0.5329', '0.7386', '0.5875', '0.5727', '0.5713', '0.6297', '0.5458', '0.5592', '0.5247', '0.4834', '0.5813', '0.5287', '0.5509'],
    },
    {
        id: 27,
        movieName: "Captain America: The First Avenger",
        movieYear: "2011",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.0827', '0.1094', '0.2661', '0.1751', '0.2809', '-0.0666', '0.1728', '0.2816', '0.1652', '0.2002', '0.1022', '0.0584', '-0.0270', '0.0213', '0.0094'],
        lengthData: ['499', '998', '1497', '1996', '2495', '2994', '3493', '3992', '4491', '4990', '5489', '5988', '6487', '6986', '7485'],
        subjectivty: ['0.5926', '0.4799', '0.4674', '0.4279', '0.6232', '0.5329', '0.5339', '0.5082', '0.5493', '0.5345', '0.4551', '0.4875', '0.5230', '0.4535', '0.4847'],
    },
    {
        id: 28,
        movieName: "Doctor Strange",
        movieYear: "2016",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.0774', '0.1058', '0.0084', '0.2003', '0.1407', '0.0650', '0.1630', '0.1504', '0.0889', '0.1644', '0.0824', '0.1084', '0.0815', '0.0059', '0.3481'],
        lengthData: ['454', '908', '1362', '1816', '2270', '2724', '3178', '3632', '4086', '4540', '4994', '5448', '5902', '6356', '6810'],
        subjectivty: ['0.4463', '0.4379', '0.3752', '0.4718', '0.4104', '0.4660', '0.5596', '0.5656', '0.5116', '0.5999', '0.4730', '0.4166', '0.4513', '0.5337', '0.5328'],
    },
    {
        id: 29,
        movieName: "Ant-Man and the Wasp",
        movieYear: "2018",
        subjectivtyToggle: true,
        polarityToggle: false,
        polarity: ['0.2138', '0.1540', '-0.1293', '0.2271', '0.0842', '0.0575', '0.1824', '0.1633', '0.0775', '0.1050', '-0.0403', '0.0782', '0.1810', '0.1498', '0.1632'],
        lengthData: ['688', '1376', '2064', '2752', '3440', '4128', '4816', '5504', '6192', '6880', '7568', '8256', '8944', '9632', '10320'],
        subjectivty: ['0.5843', '0.5518', '0.6459', '0.4228', '0.5621', '0.4582', '0.6922', '0.5814', '0.6069', '0.4542', '0.6500', '0.5761', '0.6033', '0.5325', '0.6334'],
    },
]

module.exports = {movieData};