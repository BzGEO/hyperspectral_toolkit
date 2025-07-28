/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Loads miscellaneous EMIT and PACE related features and functions
// Questions? Contact Emil A. Cherrington, Ph.D. (eac0021@uah.edu)
// This supports the following GEE code repository: https://bit.ly/gee_repo_pace_oci.
// Last updated: 27.07.2025

// var x = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PLANKTON, AEROSOL, CLOUD, OCEAN ECOSYSTEM - OCEAN COLOR INSTRUMENT (PACE OCI), 2024-PRESENT

// Wavelengths for the PACE OCI surface reflectance bands (v3) - ALL 122 bands
var wl_pace = [346, 351, 356, 361, 366, 371, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440,
    445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540,
    545, 550, 555, 560, 565, 570, 575, 580, 586, 615, 620, 625, 630, 635, 640, 642, 645, 647, 650, 652,
    655, 657, 660, 662, 665, 667, 670, 672, 675, 677, 679, 682, 697, 699, 702, 704, 707, 709, 712, 714,
    719, 724, 729, 734, 739, 742, 744, 747, 749, 752, 754, 772, 774, 779, 784, 789, 794, 799, 804, 809,
    814, 819, 824, 829, 835, 840, 845, 850, 855, 860, 865, 870, 875, 880, 885, 890, 895, 1038, 1249, 1618, 2131, 2258];

exports.wl_pace = wl_pace;

// Wavelengths for the PACE OCI surface reflectance (SR) bands (v3) - 117 VNIR bands, *NOT* including the 5 SWIR bands
var wl_pace_vnir = [346, 351, 356, 361, 366, 371, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440,
    445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540,
    545, 550, 555, 560, 565, 570, 575, 580, 586, 615, 620, 625, 630, 635, 640, 642, 645, 647, 650, 652,
    655, 657, 660, 662, 665, 667, 670, 672, 675, 677, 679, 682, 697, 699, 702, 704, 707, 709, 712, 714,
    719, 724, 729, 734, 739, 742, 744, 747, 749, 752, 754, 772, 774, 779, 784, 789, 794, 799, 804, 809,
    814, 819, 824, 829, 835, 840, 845, 850, 855, 860, 865, 870, 875, 880, 885, 890, 895];

exports.wl_pace_vnir = wl_pace_vnir;

// Renaming of PACE OCI bands to contain wavelength information

var bands_oci_orig = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16',
'b17', 'b18', 'b19', 'b20', 'b21', 'b22', 'b23', 'b24', 'b25', 'b26', 'b27', 'b28', 'b29', 'b30', 'b31', 'b32',
'b33', 'b34', 'b35', 'b36', 'b37', 'b38', 'b39', 'b40', 'b41', 'b42', 'b43', 'b44', 'b45', 'b46', 'b47', 'b48',
'b49', 'b50', 'b51', 'b52', 'b53', 'b54', 'b55', 'b56', 'b57', 'b58', 'b59', 'b60', 'b61', 'b62', 'b63', 'b64',
'b65', 'b66', 'b67', 'b68', 'b69', 'b70', 'b71', 'b72', 'b73', 'b74', 'b75', 'b76', 'b77', 'b78', 'b79', 'b80',
'b81', 'b82', 'b83', 'b84', 'b85', 'b86', 'b87', 'b88', 'b89', 'b90', 'b91', 'b92', 'b93', 'b94', 'b95', 'b96',
'b97', 'b98', 'b99', 'b100', 'b101', 'b102', 'b103', 'b104', 'b105', 'b106', 'b107', 'b108', 'b109', 'b110',
'b111', 'b112', 'b113', 'b114', 'b115', 'b116', 'b117', 'b118', 'b119', 'b120', 'b121', 'b122'];

var bands_oci_mod = ['ρ0346', 'ρ0351', 'ρ0356', 'ρ0361', 'ρ0366', 'ρ0371', 'ρ0375', 'ρ0380', 'ρ0385', 'ρ0390', 'ρ0395', 'ρ0400', 'ρ0405', 'ρ0410', 'ρ0415', 'ρ0420', 'ρ0425', 'ρ0430', 'ρ0435', 'ρ0440',
    'ρ0445', 'ρ0450', 'ρ0455', 'ρ0460', 'ρ0465', 'ρ0470', 'ρ0475', 'ρ0480', 'ρ0485', 'ρ0490', 'ρ0495', 'ρ0500', 'ρ0505', 'ρ0510', 'ρ0515', 'ρ0520', 'ρ0525', 'ρ0530', 'ρ0535', 'ρ0540',
    'ρ0545', 'ρ0550', 'ρ0555', 'ρ0560', 'ρ0565', 'ρ0570', 'ρ0575', 'ρ0580', 'ρ0586', 'ρ0615', 'ρ0620', 'ρ0625', 'ρ0630', 'ρ0635', 'ρ0640', 'ρ0642', 'ρ0645', 'ρ0647', 'ρ0650', 'ρ0652',
    'ρ0655', 'ρ0657', 'ρ0660', 'ρ0662', 'ρ0665', 'ρ0667', 'ρ0670', 'ρ0672', 'ρ0675', 'ρ0677', 'ρ0679', 'ρ0682', 'ρ0697', 'ρ0699', 'ρ0702', 'ρ0704', 'ρ0707', 'ρ0709', 'ρ0712', 'ρ0714',
    'ρ0719', 'ρ0724', 'ρ0729', 'ρ0734', 'ρ0739', 'ρ0742', 'ρ0744', 'ρ0747', 'ρ0749', 'ρ0752', 'ρ0754', 'ρ0772', 'ρ0774', 'ρ0779', 'ρ0784', 'ρ0789', 'ρ0794', 'ρ0799', 'ρ0804', 'ρ0809',
    'ρ0814', 'ρ0819', 'ρ0824', 'ρ0829', 'ρ0835', 'ρ0840', 'ρ0845', 'ρ0850', 'ρ0855', 'ρ0860', 'ρ0865', 'ρ0870', 'ρ0875', 'ρ0880', 'ρ0885', 'ρ0890', 'ρ0895', 'ρ1038', 'ρ1249',
    'ρ1618', 'ρ2131', 'ρ2258'];

exports.bands_oci_orig = bands_oci_orig;
exports.bands_oci_mod = bands_oci_mod;


// Wavelengths for equivalent MODIS bands in PACE OCI
var wl_modis = [470,555,645,860,1249,2131];

exports.wl_modis = wl_modis;

// Actual MODIS wavelengths (6 of 7 bands); see: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD43A4#bands
var wl_modis_ = [469,555,645,859,1240,2130];

exports.wl_modis_ = wl_modis_;

// also see the full list of SR v3 bands (provided by Dr. Morgaine McKibben of NASA GSFC):
// https://bit.ly/pace_oci_sr_v3_bands

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// INTERNATIONAL SPACE STATION - EARTH SURFACE MINERAL DUST SOURCE INVESTIGATION (ISS EMIT), 2023-PRESENT

// Wavelengths for the EMIT spectral bands - ALL 285 bands
var wl_emit = [381.00558, 388.4092, 395.81583, 403.2254, 410.638, 418.0536, 425.47214, 432.8927, 440.31726, 447.7428, 455.17035,
462.59888, 470.0304, 477.46292, 484.89743, 492.33292, 499.77142, 507.2099, 514.6504, 522.0909, 529.5333, 536.9768,
544.42126, 551.8667, 559.3142, 566.7616, 574.20905, 581.6585, 589.108, 596.55835, 604.0098, 611.4622, 618.9146,
626.36804, 633.8215, 641.2759, 648.7303, 656.1857, 663.6411, 671.09753, 678.5539, 686.0103, 693.4677, 700.9251,
708.38354, 715.84094, 723.2993, 730.7587, 738.2171, 745.6765, 753.1359, 760.5963, 768.0557, 775.5161, 782.97754,
790.4379, 797.89935, 805.36176, 812.8232, 820.2846, 827.746, 835.2074, 842.66986, 850.1313, 857.5937, 865.0551,
872.5176, 879.98004, 887.44147, 894.90393, 902.3664, 909.82886, 917.2913, 924.7538, 932.21625, 939.6788, 947.14026,
954.6027, 962.0643, 969.5268, 976.9883, 984.4498, 991.9114, 999.37286, 1006.8344, 1014.295, 1021.7566, 1029.2172,
1036.6777, 1044.1383, 1051.5989, 1059.0596, 1066.5201, 1073.9797, 1081.4404, 1088.9, 1096.3597, 1103.8184, 1111.2781,
1118.7368, 1126.1964, 1133.6552, 1141.1129, 1148.5717, 1156.0304, 1163.4882, 1170.9459, 1178.4037, 1185.8616, 1193.3184,
1200.7761, 1208.233, 1215.6898, 1223.1467, 1230.6036, 1238.0596, 1245.5154, 1252.9724, 1260.4283, 1267.8833, 1275.3392,
1282.7942, 1290.2502, 1297.7052, 1305.1603, 1312.6144, 1320.0685, 1327.5225, 1334.9756, 1342.4287, 1349.8818, 1357.3351,
1364.7872, 1372.2384, 1379.6907, 1387.1418, 1394.5931, 1402.0433, 1409.4937, 1416.944, 1424.3933, 1431.8427, 1439.292,
1446.7404, 1454.1888, 1461.6372, 1469.0847, 1476.5321, 1483.9796, 1491.4261, 1498.8727, 1506.3192, 1513.7649, 1521.2104,
1528.655, 1536.1007, 1543.5454, 1550.9891, 1558.4329, 1565.8766, 1573.3193, 1580.7621, 1588.205, 1595.6467, 1603.0886,
1610.5295, 1617.9705, 1625.4104, 1632.8513, 1640.2903, 1647.7303, 1655.1694, 1662.6074, 1670.0455, 1677.4836, 1684.9209,
1692.358, 1699.7952, 1707.2314, 1714.6667, 1722.103, 1729.5383, 1736.9727, 1744.4071, 1751.8414, 1759.2749, 1766.7084,
1774.1418, 1781.5743, 1789.007, 1796.4385, 1803.8701, 1811.3008, 1818.7314, 1826.1611, 1833.591, 1841.0206, 1848.4495,
1855.8773, 1863.3052, 1870.733, 1878.16, 1885.5869, 1893.013, 1900.439, 1907.864, 1915.2892, 1922.7133, 1930.1375, 1937.5607,
1944.9839, 1952.4071, 1959.8295, 1967.2518, 1974.6732, 1982.0946, 1989.515, 1996.9355, 2004.355, 2011.7745, 2019.1931, 2026.6118,
2034.0304, 2041.4471, 2048.865, 2056.2808, 2063.6965, 2071.1123, 2078.5273, 2085.9421, 2093.3562, 2100.769, 2108.1821, 2115.5942,
2123.0063, 2130.4175, 2137.8289, 2145.239, 2152.6482, 2160.0576, 2167.467, 2174.8755, 2182.283, 2189.6904, 2197.097, 2204.5034,
2211.9092, 2219.3147, 2226.7195, 2234.1233, 2241.5269, 2248.9297, 2256.3328, 2263.7346, 2271.1365, 2278.5376, 2285.9387, 2293.3386,
2300.7378, 2308.136, 2315.5342, 2322.9326, 2330.3298, 2337.7263, 2345.1216, 2352.517, 2359.9126, 2367.3071, 2374.7007, 2382.0935,
2389.486, 2396.878, 2404.2695, 2411.6604, 2419.0513, 2426.4402, 2433.8303, 2441.2183, 2448.6064, 2455.9944, 2463.3816, 2470.7678,
2478.153, 2485.5386, 2492.9238];

exports.wl_emit = wl_emit;

// Wavelengths for the EMIT spectral bands - ALL 285 bands, but as integers
var wl_emit_int = [382, 389, 396, 404, 411, 419, 426, 433, 441, 448, 456, 463, 471, 478, 485, 493,
500, 508, 515, 523, 530, 537, 545, 552, 560, 567, 575, 582, 590, 597,
605, 612, 619, 627, 634, 642, 649, 657, 664, 672, 679, 687, 694,
701, 709, 716, 724, 731, 739, 746, 754, 761, 769, 776, 783, 791, 798,
806, 813, 821, 828, 836, 843, 851, 858, 866, 873, 880, 888, 895,
903, 910, 918, 925, 933, 940, 948, 955, 963, 970, 977, 985, 992,
1000, 1007, 1015, 1022, 1030, 1037, 1045, 1052, 1060, 1067, 1074, 1082, 1089, 1097,
1104, 1112, 1119, 1127, 1134, 1142, 1149, 1157, 1164, 1171, 1179, 1186, 1194,
1201, 1209, 1216, 1224, 1231, 1239, 1246, 1253, 1261, 1268, 1276, 1283, 1291, 1298,
1306, 1313, 1321, 1328, 1335, 1343, 1350, 1358, 1365, 1373, 1380, 1388, 1395, 1403,
1410, 1417, 1425, 1432, 1440, 1447, 1455, 1462, 1470, 1477, 1484, 1492, 1499,
1507, 1514, 1522, 1529, 1537, 1544, 1551, 1559, 1566, 1574, 1581, 1589, 1596,
1604, 1611, 1618, 1626, 1633, 1641, 1648, 1656, 1663, 1671, 1678, 1685, 1693,
1700, 1708, 1715, 1723, 1730, 1737, 1745, 1752, 1760, 1767, 1775, 1782, 1790, 1797,
1804, 1812, 1819, 1827, 1834, 1842, 1849, 1856, 1864, 1871, 1879, 1886, 1894,
1901, 1908, 1916, 1923, 1931, 1938, 1945, 1953, 1960, 1968, 1975, 1983, 1990, 1997,
2005, 2012, 2020, 2027, 2035, 2042, 2049, 2057, 2064, 2072, 2079, 2086, 2094,
2101, 2109, 2116, 2124, 2131, 2138, 2146, 2153, 2161, 2168, 2175, 2183, 2190, 2198,
2205, 2212, 2220, 2227, 2235, 2242, 2249, 2257, 2264, 2272, 2279, 2286, 2294,
2301, 2309, 2316, 2323, 2331, 2338, 2346, 2353, 2360, 2368, 2375, 2383, 2390, 2397,
2405, 2412, 2420, 2427, 2434, 2442, 2449, 2456, 2464, 2471, 2479, 2486, 2493];

exports.wl_emit_int = wl_emit_int;

// Wavelengths for working EMIT spectral bands - excluding bands with missing data (bands 128-143, 188-213)
var wl_emit_sub = [381.00558, 388.4092, 395.81583, 403.2254, 410.638, 418.0536, 425.47214, 432.8927, 440.31726, 447.7428, 455.17035,
462.59888, 470.0304, 477.46292, 484.89743, 492.33292, 499.77142, 507.2099, 514.6504, 522.0909, 529.5333, 536.9768,
544.42126, 551.8667, 559.3142, 566.7616, 574.20905, 581.6585, 589.108, 596.55835, 604.0098, 611.4622, 618.9146,
626.36804, 633.8215, 641.2759, 648.7303, 656.1857, 663.6411, 671.09753, 678.5539, 686.0103, 693.4677, 700.9251,
708.38354, 715.84094, 723.2993, 730.7587, 738.2171, 745.6765, 753.1359, 760.5963, 768.0557, 775.5161, 782.97754,
790.4379, 797.89935, 805.36176, 812.8232, 820.2846, 827.746, 835.2074, 842.66986, 850.1313, 857.5937, 865.0551,
872.5176, 879.98004, 887.44147, 894.90393, 902.3664, 909.82886, 917.2913, 924.7538, 932.21625, 939.6788, 947.14026,
954.6027, 962.0643, 969.5268, 976.9883, 984.4498, 991.9114, 999.37286, 1006.8344, 1014.295, 1021.7566, 1029.2172,
1036.6777, 1044.1383, 1051.5989, 1059.0596, 1066.5201, 1073.9797, 1081.4404, 1088.9, 1096.3597, 1103.8184, 1111.2781,
1118.7368, 1126.1964, 1133.6552, 1141.1129, 1148.5717, 1156.0304, 1163.4882, 1170.9459, 1178.4037, 1185.8616, 1193.3184,
1200.7761, 1208.233, 1215.6898, 1223.1467, 1230.6036, 1238.0596, 1245.5154, 1252.9724, 1260.4283, 1267.8833, 1275.3392,
1282.7942, 1290.2502, 1297.7052, 1305.1603, 1312.6144, 1320.0685,
1446.7404, 1454.1888, 1461.6372, 1469.0847, 1476.5321, 1483.9796, 1491.4261, 1498.8727, 1506.3192, 1513.7649, 1521.2104,
1528.655, 1536.1007, 1543.5454, 1550.9891, 1558.4329, 1565.8766, 1573.3193, 1580.7621, 1588.205, 1595.6467, 1603.0886,
1610.5295, 1617.9705, 1625.4104, 1632.8513, 1640.2903, 1647.7303, 1655.1694, 1662.6074, 1670.0455, 1677.4836, 1684.9209,
1692.358, 1699.7952, 1707.2314, 1714.6667, 1722.103, 1729.5383, 1736.9727, 1744.4071, 1751.8414, 1759.2749, 1766.7084,
1967.2518, 1974.6732, 1982.0946, 1989.515, 1996.9355, 2004.355, 2011.7745, 2019.1931, 2026.6118,
2034.0304, 2041.4471, 2048.865, 2056.2808, 2063.6965, 2071.1123, 2078.5273, 2085.9421, 2093.3562, 2100.769, 2108.1821, 2115.5942,
2123.0063, 2130.4175, 2137.8289, 2145.239, 2152.6482, 2160.0576, 2167.467, 2174.8755, 2182.283, 2189.6904, 2197.097, 2204.5034,
2211.9092, 2219.3147, 2226.7195, 2234.1233, 2241.5269, 2248.9297, 2256.3328, 2263.7346, 2271.1365, 2278.5376, 2285.9387, 2293.3386,
2300.7378, 2308.136, 2315.5342, 2322.9326, 2330.3298, 2337.7263, 2345.1216, 2352.517, 2359.9126, 2367.3071, 2374.7007, 2382.0935,
2389.486, 2396.878, 2404.2695, 2411.6604, 2419.0513, 2426.4402, 2433.8303, 2441.2183, 2448.6064, 2455.9944, 2463.3816, 2470.7678,
2478.153, 2485.5386, 2492.9238];

exports.wl_emit_sub = wl_emit_sub;

// also see the full list of EMIT spectral bands:
// https://bit.ly/iss_emit_bands

var bands_emit_orig = [
'reflectance_0', 'reflectance_1', 'reflectance_2', 'reflectance_3', 'reflectance_4', 'reflectance_5', 'reflectance_6', 'reflectance_7', 'reflectance_8', 'reflectance_9', 'reflectance_10',
'reflectance_11', 'reflectance_12', 'reflectance_13', 'reflectance_14', 'reflectance_15', 'reflectance_16', 'reflectance_17', 'reflectance_18', 'reflectance_19', 'reflectance_20',
'reflectance_21', 'reflectance_22', 'reflectance_23', 'reflectance_24', 'reflectance_25', 'reflectance_26', 'reflectance_27', 'reflectance_28', 'reflectance_29', 'reflectance_30',
'reflectance_31', 'reflectance_32', 'reflectance_33', 'reflectance_34', 'reflectance_35', 'reflectance_36', 'reflectance_37', 'reflectance_38', 'reflectance_39', 'reflectance_40',
'reflectance_41', 'reflectance_42', 'reflectance_43', 'reflectance_44', 'reflectance_45', 'reflectance_46', 'reflectance_47', 'reflectance_48', 'reflectance_49', 'reflectance_50',
'reflectance_51', 'reflectance_52', 'reflectance_53', 'reflectance_54', 'reflectance_55', 'reflectance_56', 'reflectance_57', 'reflectance_58', 'reflectance_59', 'reflectance_60',
'reflectance_61', 'reflectance_62', 'reflectance_63', 'reflectance_64', 'reflectance_65', 'reflectance_66', 'reflectance_67', 'reflectance_68', 'reflectance_69', 'reflectance_70',
'reflectance_71', 'reflectance_72', 'reflectance_73', 'reflectance_74', 'reflectance_75', 'reflectance_76', 'reflectance_77', 'reflectance_78', 'reflectance_79', 'reflectance_80',
'reflectance_81', 'reflectance_82', 'reflectance_83', 'reflectance_84', 'reflectance_85', 'reflectance_86', 'reflectance_87', 'reflectance_88', 'reflectance_89', 'reflectance_90',
'reflectance_91', 'reflectance_92', 'reflectance_93', 'reflectance_94', 'reflectance_95', 'reflectance_96', 'reflectance_97', 'reflectance_98', 'reflectance_99', 'reflectance_100',
'reflectance_101', 'reflectance_102', 'reflectance_103', 'reflectance_104', 'reflectance_105', 'reflectance_106', 'reflectance_107', 'reflectance_108', 'reflectance_109', 'reflectance_110',
'reflectance_111', 'reflectance_112', 'reflectance_113', 'reflectance_114', 'reflectance_115', 'reflectance_116', 'reflectance_117', 'reflectance_118', 'reflectance_119', 'reflectance_120',
'reflectance_121', 'reflectance_122', 'reflectance_123', 'reflectance_124', 'reflectance_125', 'reflectance_126', 'reflectance_127', 'reflectance_128', 'reflectance_129', 'reflectance_130',
'reflectance_131', 'reflectance_132', 'reflectance_133', 'reflectance_134', 'reflectance_135', 'reflectance_136', 'reflectance_137', 'reflectance_138', 'reflectance_139', 'reflectance_140',
'reflectance_141', 'reflectance_142', 'reflectance_143', 'reflectance_144', 'reflectance_145', 'reflectance_146', 'reflectance_147', 'reflectance_148', 'reflectance_149', 'reflectance_150',
'reflectance_151', 'reflectance_152', 'reflectance_153', 'reflectance_154', 'reflectance_155', 'reflectance_156', 'reflectance_157', 'reflectance_158', 'reflectance_159', 'reflectance_160',
'reflectance_161', 'reflectance_162', 'reflectance_163', 'reflectance_164', 'reflectance_165', 'reflectance_166', 'reflectance_167', 'reflectance_168', 'reflectance_169', 'reflectance_170',
'reflectance_171', 'reflectance_172', 'reflectance_173', 'reflectance_174', 'reflectance_175', 'reflectance_176', 'reflectance_177', 'reflectance_178', 'reflectance_179', 'reflectance_180',
'reflectance_181', 'reflectance_182', 'reflectance_183', 'reflectance_184', 'reflectance_185', 'reflectance_186', 'reflectance_187', 'reflectance_188', 'reflectance_189', 'reflectance_190',
'reflectance_191', 'reflectance_192', 'reflectance_193', 'reflectance_194', 'reflectance_195', 'reflectance_196', 'reflectance_197', 'reflectance_198', 'reflectance_199', 'reflectance_200',
'reflectance_201', 'reflectance_202', 'reflectance_203', 'reflectance_204', 'reflectance_205', 'reflectance_206', 'reflectance_207', 'reflectance_208', 'reflectance_209', 'reflectance_210',
'reflectance_211', 'reflectance_212', 'reflectance_213', 'reflectance_214', 'reflectance_215', 'reflectance_216', 'reflectance_217', 'reflectance_218', 'reflectance_219', 'reflectance_220',
'reflectance_221', 'reflectance_222', 'reflectance_223', 'reflectance_224', 'reflectance_225', 'reflectance_226', 'reflectance_227', 'reflectance_228', 'reflectance_229', 'reflectance_230',
'reflectance_231', 'reflectance_232', 'reflectance_233', 'reflectance_234', 'reflectance_235', 'reflectance_236', 'reflectance_237', 'reflectance_238', 'reflectance_239', 'reflectance_240',
'reflectance_241', 'reflectance_242', 'reflectance_243', 'reflectance_244', 'reflectance_245', 'reflectance_246', 'reflectance_247', 'reflectance_248', 'reflectance_249', 'reflectance_250',
'reflectance_251', 'reflectance_252', 'reflectance_253', 'reflectance_254', 'reflectance_255', 'reflectance_256', 'reflectance_257', 'reflectance_258', 'reflectance_259', 'reflectance_260',
'reflectance_261', 'reflectance_262', 'reflectance_263', 'reflectance_264', 'reflectance_265', 'reflectance_266', 'reflectance_267', 'reflectance_268', 'reflectance_269', 'reflectance_270',
'reflectance_271', 'reflectance_272', 'reflectance_273', 'reflectance_274', 'reflectance_275', 'reflectance_276', 'reflectance_277', 'reflectance_278', 'reflectance_279', 'reflectance_280',
'reflectance_281', 'reflectance_282', 'reflectance_283', 'reflectance_284'];

exports.bands_emit_orig = bands_emit_orig;

var bands_emit_rad_orig = ['radiance_0', 'radiance_1', 'radiance_2', 'radiance_3', 'radiance_4', 'radiance_5', 'radiance_6', 'radiance_7', 'radiance_8', 'radiance_9', 'radiance_10',
'radiance_11', 'radiance_12', 'radiance_13', 'radiance_14', 'radiance_15', 'radiance_16', 'radiance_17', 'radiance_18', 'radiance_19', 'radiance_20',
'radiance_21', 'radiance_22', 'radiance_23', 'radiance_24', 'radiance_25', 'radiance_26', 'radiance_27', 'radiance_28', 'radiance_29', 'radiance_30',
'radiance_31', 'radiance_32', 'radiance_33', 'radiance_34', 'radiance_35', 'radiance_36', 'radiance_37', 'radiance_38', 'radiance_39', 'radiance_40',
'radiance_41', 'radiance_42', 'radiance_43', 'radiance_44', 'radiance_45', 'radiance_46', 'radiance_47', 'radiance_48', 'radiance_49', 'radiance_50',
'radiance_51', 'radiance_52', 'radiance_53', 'radiance_54', 'radiance_55', 'radiance_56', 'radiance_57', 'radiance_58', 'radiance_59', 'radiance_60',
'radiance_61', 'radiance_62', 'radiance_63', 'radiance_64', 'radiance_65', 'radiance_66', 'radiance_67', 'radiance_68', 'radiance_69', 'radiance_70',
'radiance_71', 'radiance_72', 'radiance_73', 'radiance_74', 'radiance_75', 'radiance_76', 'radiance_77', 'radiance_78', 'radiance_79', 'radiance_80',
'radiance_81', 'radiance_82', 'radiance_83', 'radiance_84', 'radiance_85', 'radiance_86', 'radiance_87', 'radiance_88', 'radiance_89', 'radiance_90',
'radiance_91', 'radiance_92', 'radiance_93', 'radiance_94', 'radiance_95', 'radiance_96', 'radiance_97', 'radiance_98', 'radiance_99', 'radiance_100',
'radiance_101', 'radiance_102', 'radiance_103', 'radiance_104', 'radiance_105', 'radiance_106', 'radiance_107', 'radiance_108', 'radiance_109', 'radiance_110',
'radiance_111', 'radiance_112', 'radiance_113', 'radiance_114', 'radiance_115', 'radiance_116', 'radiance_117', 'radiance_118', 'radiance_119', 'radiance_120',
'radiance_121', 'radiance_122', 'radiance_123', 'radiance_124', 'radiance_125', 'radiance_126', 'radiance_127', 'radiance_128', 'radiance_129', 'radiance_130',
'radiance_131', 'radiance_132', 'radiance_133', 'radiance_134', 'radiance_135', 'radiance_136', 'radiance_137', 'radiance_138', 'radiance_139', 'radiance_140',
'radiance_141', 'radiance_142', 'radiance_143', 'radiance_144', 'radiance_145', 'radiance_146', 'radiance_147', 'radiance_148', 'radiance_149', 'radiance_150',
'radiance_151', 'radiance_152', 'radiance_153', 'radiance_154', 'radiance_155', 'radiance_156', 'radiance_157', 'radiance_158', 'radiance_159', 'radiance_160',
'radiance_161', 'radiance_162', 'radiance_163', 'radiance_164', 'radiance_165', 'radiance_166', 'radiance_167', 'radiance_168', 'radiance_169', 'radiance_170',
'radiance_171', 'radiance_172', 'radiance_173', 'radiance_174', 'radiance_175', 'radiance_176', 'radiance_177', 'radiance_178', 'radiance_179', 'radiance_180',
'radiance_181', 'radiance_182', 'radiance_183', 'radiance_184', 'radiance_185', 'radiance_186', 'radiance_187', 'radiance_188', 'radiance_189', 'radiance_190',
'radiance_191', 'radiance_192', 'radiance_193', 'radiance_194', 'radiance_195', 'radiance_196', 'radiance_197', 'radiance_198', 'radiance_199', 'radiance_200',
'radiance_201', 'radiance_202', 'radiance_203', 'radiance_204', 'radiance_205', 'radiance_206', 'radiance_207', 'radiance_208', 'radiance_209', 'radiance_210',
'radiance_211', 'radiance_212', 'radiance_213', 'radiance_214', 'radiance_215', 'radiance_216', 'radiance_217', 'radiance_218', 'radiance_219', 'radiance_220',
'radiance_221', 'radiance_222', 'radiance_223', 'radiance_224', 'radiance_225', 'radiance_226', 'radiance_227', 'radiance_228', 'radiance_229', 'radiance_230',
'radiance_231', 'radiance_232', 'radiance_233', 'radiance_234', 'radiance_235', 'radiance_236', 'radiance_237', 'radiance_238', 'radiance_239', 'radiance_240',
'radiance_241', 'radiance_242', 'radiance_243', 'radiance_244', 'radiance_245', 'radiance_246', 'radiance_247', 'radiance_248', 'radiance_249', 'radiance_250',
'radiance_251', 'radiance_252', 'radiance_253', 'radiance_254', 'radiance_255', 'radiance_256', 'radiance_257', 'radiance_258', 'radiance_259', 'radiance_260',
'radiance_261', 'radiance_262', 'radiance_263', 'radiance_264', 'radiance_265', 'radiance_266', 'radiance_267', 'radiance_268', 'radiance_269', 'radiance_270',
'radiance_271', 'radiance_272', 'radiance_273', 'radiance_274', 'radiance_275', 'radiance_276', 'radiance_277', 'radiance_278', 'radiance_279', 'radiance_280',
'radiance_281', 'radiance_282', 'radiance_283', 'radiance_284']

exports.bands_emit_rad_orig = bands_emit_rad_orig;


var bands_emit_mod =[
'ρ0381', 'ρ0388', 'ρ0396', 
'ρ0403', 'ρ0411', 'ρ0418', 'ρ0425', 'ρ0433', 'ρ0440', 'ρ0448', 'ρ0455', 'ρ0463', 'ρ0470', 'ρ0477', 'ρ0485', 'ρ0492', 
'ρ0500', 'ρ0507', 'ρ0515', 'ρ0522', 'ρ0530', 'ρ0537', 'ρ0544', 'ρ0552', 'ρ0559', 'ρ0567', 'ρ0574', 'ρ0582', 'ρ0589', 'ρ0597',
'ρ0604', 'ρ0611', 'ρ0619', 'ρ0626', 'ρ0634', 'ρ0641', 'ρ0649', 'ρ0656', 'ρ0664', 'ρ0671', 'ρ0679', 'ρ0686', 'ρ0693', 
'ρ0701', 'ρ0708', 'ρ0716', 'ρ0723', 'ρ0731', 'ρ0738', 'ρ0746', 'ρ0753', 'ρ0761', 'ρ0768', 'ρ0776', 'ρ0783', 'ρ0790', 'ρ0798', 
'ρ0805', 'ρ0813', 'ρ0820', 'ρ0828', 'ρ0835', 'ρ0843', 'ρ0850', 'ρ0858', 'ρ0865', 'ρ0873', 'ρ0880', 'ρ0887', 'ρ0895',
'ρ0902', 'ρ0910', 'ρ0917', 'ρ0925', 'ρ0932', 'ρ0940', 'ρ0947', 'ρ0955', 'ρ0962', 'ρ0970', 'ρ0977', 'ρ0984', 'ρ0992', 'ρ0999',
'ρ1007', 'ρ1014', 'ρ1022', 'ρ1029', 'ρ1037', 'ρ1044', 'ρ1052', 'ρ1059', 'ρ1067', 'ρ1074', 'ρ1081', 'ρ1089', 'ρ1096', 
'ρ1104', 'ρ1111', 'ρ1119', 'ρ1126', 'ρ1134', 'ρ1141', 'ρ1149', 'ρ1156', 'ρ1163', 'ρ1171', 'ρ1178', 'ρ1186', 'ρ1193', 
'ρ1201', 'ρ1208', 'ρ1216', 'ρ1223', 'ρ1231', 'ρ1238', 'ρ1246', 'ρ1253', 'ρ1260', 'ρ1268', 'ρ1275', 'ρ1283', 'ρ1290', 'ρ1298',
'ρ1305', 'ρ1313', 'ρ1320', 'ρ1328', 'ρ1335', 'ρ1342', 'ρ1350', 'ρ1357', 'ρ1365', 'ρ1372', 'ρ1380', 'ρ1387', 'ρ1395', 
'ρ1402', 'ρ1409', 'ρ1417', 'ρ1424', 'ρ1432', 'ρ1439', 'ρ1447', 'ρ1454', 'ρ1462', 'ρ1469', 'ρ1477', 'ρ1484', 'ρ1491', 'ρ1499', 
'ρ1506', 'ρ1514', 'ρ1521', 'ρ1529', 'ρ1536', 'ρ1544', 'ρ1551', 'ρ1558', 'ρ1566', 'ρ1573', 'ρ1581', 'ρ1588', 'ρ1596',
'ρ1603', 'ρ1611', 'ρ1618', 'ρ1625', 'ρ1633', 'ρ1640', 'ρ1648', 'ρ1655', 'ρ1663', 'ρ1670', 'ρ1677', 'ρ1685', 'ρ1692', 
'ρ1700', 'ρ1707', 'ρ1715', 'ρ1722', 'ρ1730', 'ρ1737', 'ρ1744', 'ρ1752', 'ρ1759', 'ρ1767', 'ρ1774', 'ρ1782', 'ρ1789', 'ρ1796', 
'ρ1804', 'ρ1811', 'ρ1819', 'ρ1826', 'ρ1834', 'ρ1841', 'ρ1848', 'ρ1856', 'ρ1863', 'ρ1871', 'ρ1878', 'ρ1886', 'ρ1893',
'ρ1900', 'ρ1908', 'ρ1915', 'ρ1923', 'ρ1930', 'ρ1938', 'ρ1945', 'ρ1952', 'ρ1960', 'ρ1967', 'ρ1975', 'ρ1982', 'ρ1990', 'ρ1997', 
'ρ2004', 'ρ2012', 'ρ2019', 'ρ2027', 'ρ2034', 'ρ2041', 'ρ2049', 'ρ2056', 'ρ2064', 'ρ2071', 'ρ2079', 'ρ2086', 'ρ2093',
'ρ2101', 'ρ2108', 'ρ2116', 'ρ2123', 'ρ2130', 'ρ2138', 'ρ2145', 'ρ2153', 'ρ2160', 'ρ2167', 'ρ2175', 'ρ2182', 'ρ2190', 'ρ2197', 
'ρ2205', 'ρ2212', 'ρ2219', 'ρ2227', 'ρ2234', 'ρ2242', 'ρ2249', 'ρ2256', 'ρ2264', 'ρ2271', 'ρ2279', 'ρ2286', 'ρ2293', 
'ρ2301', 'ρ2308', 'ρ2316', 'ρ2323', 'ρ2330', 'ρ2338', 'ρ2345', 'ρ2353', 'ρ2360', 'ρ2367', 'ρ2375', 'ρ2382', 'ρ2389', 'ρ2397', 
'ρ2404', 'ρ2412', 'ρ2419', 'ρ2426', 'ρ2434', 'ρ2441', 'ρ2449', 'ρ2456', 'ρ2463', 'ρ2471', 'ρ2478', 'ρ2486', 'ρ2493'];

exports.bands_emit_mod = bands_emit_mod;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NASA EARTH OBSERVING-1 (EO-1) HYPERION INSTRUMENT, 2000-2017

// Wavelengths for all 224 EO-1 Hyperion spectral bands

var wl_hyperion =
[426.8200, 436.9900, 447.1700, 457.3400, 467.5200, 477.6900, 487.8700, 498.0400,
508.2200, 518.3900, 528.5700, 538.7400, 548.9200, 559.0900, 569.2700, 579.4500, 589.6200, 599.8000,
609.9700, 620.1500, 630.3200, 640.5000, 650.6700, 660.8500, 671.0200, 681.2000, 691.3700,
701.5500, 711.7200, 721.9000, 732.0700, 742.2500, 752.4300, 762.6000, 772.7800, 782.9500, 793.1300,
803.3000, 813.4800, 823.6500, 833.8300, 844.0000, 854.1800, 864.3500, 874.5300, 884.7000, 894.8800,
905.0500, 915.2300, 925.4100, 912.4500, 922.5400, 932.6400, 942.7300, 952.8200, 962.9100, 972.9900, 983.0800, 993.1700,
1003.300,1013.300, 1023.400,1033.490,1043.590, 1053.690, 1063.790, 1073.890, 1083.990, 1094.090,
1104.190, 1114.190, 1124.280,1134.3800, 1144.4800, 1154.5800, 1164.6800, 1174.7700, 1184.8700, 1194.9700,
1205.0700, 1215.1700, 1225.1700, 1235.2700, 1245.3600, 1255.4600, 1265.5600, 1275.6600, 1285.7600, 1295.8600,
1305.9600, 1316.0500, 1326.0500, 1336.1500, 1346.2500, 1356.3500, 1366.4500, 1376.5500, 1386.6500, 1396.7400,
1406.8400, 1416.9400, 1426.9400, 1437.0400, 1447.1400, 1457.2300, 1467.3300, 1477.4300, 1487.5300, 1497.6300,
1507.7300, 1517.8300, 1527.9200, 1537.9200, 1548.0200, 1558.1200, 1568.2200, 1578.3200, 1588.4200, 1598.5100,
1608.6100, 1618.7100, 1628.8100, 1638.8100, 1648.9000, 1659.0000, 1669.1000, 1679.2000, 1689.3000, 1699.4000,
1709.5000, 1719.6000, 1729.7000, 1739.7000, 1749.7900, 1759.8900, 1769.9900, 1780.0900, 1790.1900,
1800.2900, 1810.3800, 1820.4800, 1830.5800, 1840.5800, 1850.6800, 1860.7800, 1870.8700, 1880.9800, 1891.0700,
1901.1700, 1911.2700, 1921.3700, 1931.4700, 1941.5700, 1951.5700, 1961.6600, 1971.7600, 1981.8600, 1991.9600,
2002.0600, 2012.1500, 2022.2500, 2032.3500, 2042.4500, 2052.4500, 2062.5500, 2072.6500, 2082.7500, 2092.8400,
2102.9400, 2113.0400, 2123.1400, 2133.2400, 2143.3400, 2153.3400, 2163.4300, 2173.5300, 2183.6300, 2193.7300,
2203.8300, 2213.9300, 2224.0300, 2234.1200, 2244.2200, 2254.2200, 2264.3200, 2274.4200, 2284.5200, 2294.6100,
2304.7100, 2314.8100, 2324.9100, 2335.0100, 2345.1100, 2355.2100, 2365.2000, 2375.3000, 2385.4000, 2395.5000];

// NASA EO-1 Hyperion wavelengths courtesy of Dr. Gennadii Donchyts of Google

exports.wl_hyperion = wl_hyperion;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var coll_emit = ee.ImageCollection('NASA/EMIT/L2A/RFL').select(ee.List.sequence(0, 284));
exports.coll_emit = coll_emit;

var coll_emit_sub = ee.ImageCollection('NASA/EMIT/L2A/RFL').select(ee.List.sequence(0, 126).cat(ee.List.sequence(143, 186)).cat(ee.List.sequence(213, 284)));
exports.coll_emit_sub = coll_emit_sub;

var coll_emit_rescaled = ee.ImageCollection('NASA/EMIT/L2A/RFL').select(ee.List.sequence(0, 284))
                        .map(function(img){return img.multiply(10000).toInt16().set('system:time_start',img.get('system:time_start'))}
                        //.map(function(img){return img.updateMask(img.select(ee.List.sequence(0, 284)).lt(10000)).set('system:time_start',img.get('system:time_start'))})
                        );

exports.coll_emit_rescaled = coll_emit_rescaled;

// Subset of EMIT data (243 bands), excluding bands with missing data (bands 128-143, 188-213) - SINGLE DATE
var emit_sr = function(roi, date){

var src = ee.ImageCollection('NASA/EMIT/L2A/RFL');  

var img1 = src.filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
              .select(ee.List.sequence(0, 126))
              .median().multiply(10000).toInt16();

var img2 = src.filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
              .select(ee.List.sequence(143, 186))
              .median().multiply(10000).toInt16();

var img3 = src.filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
              .select(ee.List.sequence(213, 284))
              .median().multiply(10000).toInt16();

return img1.addBands(img2).addBands(img3).set('system:time_start',img1.get('system:time_start'))};


exports.emit_sr = emit_sr;

// Subset of EMIT data (243 bands), excluding bands with missing data (bands 128-143, 188-213) - MULTIPLE DATES
var emit_sr2 = function(roi, date1, date2){

var src = ee.ImageCollection('NASA/EMIT/L2A/RFL');  

var img1 = src.filterDate(ee.Date(date1), ee.Date(date2)).filterBounds(roi)
              .select(ee.List.sequence(0, 126))
              .median().multiply(10000).toInt16().clip(roi);

var img2 = src.filterDate(ee.Date(date1), ee.Date(date2)).filterBounds(roi)
              .select(ee.List.sequence(143, 186))
              .median().multiply(10000).toInt16().clip(roi);

var img3 = src.filterDate(ee.Date(date1), ee.Date(date2)).filterBounds(roi)
              .select(ee.List.sequence(213, 284))
              .median().multiply(10000).toInt16().clip(roi);

return img1.addBands(img2).addBands(img3)};


exports.emit_sr2 = emit_sr2;


// Full EMIT data, including bad bands
var emit_sr_full = function(roi, date){

return ee.ImageCollection('NASA/EMIT/L2A/RFL')
        .filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
        .select(ee.List.sequence(0, 284))
        .median().multiply(10000).toInt16()};

exports.emit_sr_full = emit_sr_full;


// Full EMIT data, including bad bands - allows changing date range to more than 1 day
var emit_sr_bz = function(date){

var roi = ee.Geometry.Rectangle(-87.28, 15.85, -89.27, 18.54);

return ee.ImageCollection('NASA/EMIT/L2A/RFL')
        .filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
        .select(ee.List.sequence(0, 284))
        .median().multiply(10000).toInt16().clip(roi)};

exports.emit_sr_bz = emit_sr_bz;


// Full EMIT data, including bad bands - allows changing date range to more than 1 day
var emit_sr_full2 = function(roi, date1, date2){

return ee.ImageCollection('NASA/EMIT/L2A/RFL')
        .filterDate(ee.Date(date1), ee.Date(date2)).filterBounds(roi)
        .select(ee.List.sequence(0, 284))
        .median().multiply(10000).toInt16()};

exports.emit_sr_full2 = emit_sr_full2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BAND COMBINATIONS FOR IMAGE VISUALIZATIONS

// The following three visualizations are designed to mimic the band 5-4-3 combination from Landsats -4, -5, and -7 (6-5-4 for L8, L9).
// These display forested areas in dark green, grasslands in pink / purple, and water in dark blue.

var viz1_scaled = {bands: ["b120","b111","b60"], min: [2700,2500,450], max: [3800,3700,1250]};
exports.viz1 = viz1_scaled;

var viz1_unscaled = {bands: ["b120","b111","b60"], min: [0.27,0.25,0.045], max: [0.38,0.37,0.125]};
exports.viz1_ = viz1_unscaled;

var viz2_scaled = {bands: ["b120","b111","b60"], min: [-1100, -1350, -700], max:[3800, 5100, 2050]};
exports.viz2 = viz2_scaled;

var viz3_scaled = {bands: ["b120","b111","b60"], min: [-730, -834, -684], max:[4050, 5376, 2140]};
exports.viz3 = viz3_scaled;

var viz3_unscaled = {bands: ["b120","b111","b60"], min: [-0.0730, -0.0834, -0.0684], max:[0.4050, 0.5376, 0.2140]};
exports.viz3_ = viz3_unscaled;

/////

var viz1_emit = {bands: ['reflectance_164','reflectance_65','reflectance_37'], min: [-730, -834, -684], max:[4050, 5376, 2140]};

exports.viz1_emit = viz1_emit;

var viz1b_emit = {bands: ['reflectance_164','reflectance_65','reflectance_37'], min: [-0.0730, -0.0834, -0.0684], max:[0.4050, 0.5376, 0.2140]};

exports.viz1b_emit = viz1b_emit;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VEGETATION INDICES (VIs)
// src: https://pace.oceansciences.org/docs/03-c-Huemmrich_PACE_Terrestrial.pdf (Huemmrich, 2024)
// using the bands from: https://bit.ly/pace_oci_sr_v3_bands


// NDVI - Normalized Difference Vegetation Index
var ndvi = function(img){

return img.normalizedDifference(['b111','b60']).multiply(10000).rename("NDVI")
.set('system:time_start',img.get('system:time_start'));
};

exports.ndvi = ndvi;

// EVI - Enhanced Vegetation Index
var evi = function(img) {

return img.expression('2.5 * ( (NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1) )',
{
"BLUE": img.select([26]),
"RED":  img.select([59]),
"NIR":  img.select([110]),

}).multiply(10000).rename('EVI').set('system:time_start', img.get('system:time_start'));
};

exports.evi = evi;

// Normalized Burn Ratio (NBR)
// more info: https://www.usgs.gov/landsat-missions/landsat-normalized-burn-ratio

var nbr = function(img) {

return img.normalizedDifference(['b111','b121']).multiply(10000).rename("NBR")
.set('system:time_start',img.get('system:time_start'));
};

exports.nbr = nbr;

// NDWI: Normalized Difference Water Index
// ("water content and foliage water stress" - Huemmrich, 2024)
var ndwi = function(img) {

return img.normalizedDifference(['b111','b119']).multiply(10000).rename("NDWI")
.set('system:time_start',img.get('system:time_start'));
};

exports.ndwi = ndwi;

// NDII: Normalized Difference Infrared Index
// ("water content and foliage water stress" - Huemmrich, 2024)
var ndii = function(img) {

return img.normalizedDifference(['b111','b120']).multiply(10000).rename("NDII")
.set('system:time_start',img.get('system:time_start'));
};

exports.ndii = ndii;

// NDSI: Normalized Difference Snow Index
var ndsi = function(img) {

return img.normalizedDifference(['b43','b120']).multiply(10000).rename("NDSI")
.set('system:time_start',img.get('system:time_start'));
};

exports.ndsi = ndsi;

// PRI: Photochemical Reflectance Index
// ("shifts in xanthopyll cycle pigments related to light use efficiency" - Huemmrich, 2024)
var pri = function(img) {

return img.normalizedDifference(['b38','b46']).multiply(10000).rename("PRI")
.set('system:time_start',img.get('system:time_start'));
};

exports.pri = pri;

// CCI:Chlorophyll Carotenoid Index
// ("info. on photosynthetic efficiency through chlorophyll / carotenoid pigment ratios" - Huemmrich, 2024)
var cci = function(img) {

return img.normalizedDifference(['b38','b60']).multiply(10000).rename("CCI")
.set('system:time_start',img.get('system:time_start'));
};

exports.cci = cci;

// CIRE - Chlorophyll Index Red Edge
// ("canopy chlorophyll content" - Huemmrich, 2024)
var cire = function(img) {

var pt1 = img.select([97]);
var pt2 = img.select([75]);
var pt3 = pt1.divide(pt2);

return pt3.subtract(1).multiply(10000).rename("CIRE").set('system:time_start',img.get('system:time_start'));
};

exports.cire = cire;

// CAR - Carotenoid Content Index
// ("canopy carotenoid content, which gives insight on photosynthesis & photoprotection" - Huemmrich, 2024)
var car = function(img) {

return img.expression('P800 * ( (1 / P495) - (1 / P705) )',

{
"P495":img.select([30]),
"P705":img.select([75]),
"P800":img.select([97])

}).multiply(10000).rename("CAR").set('system:time_start',img.get('system:time_start'));
};

exports.car = car;

// mARI - Modified Anthocyanin Reflectance Index
// ("anthocyanin content, providing info. on photoprotection & early indications of senescence" - Huemmrich, 2024)
var mari = function(img) {

return img.expression('P800 * ( (1 / P550) - (1 / P705) )',

{
"P550":img.select([41]),
"P705":img.select([75]),
"P800":img.select([97])

}).multiply(10000).rename("mARI").set('system:time_start',img.get('system:time_start'));
};

exports.mari = mari;

/////

// The following combines CAR, CIRE, and mARI as three bands of a single image to allow for tracking over time.
// As noted above, CAR tracks carotenoids, CIRE tracks chlorophyll, and mARI tracks anthocyanins.
var car_cire_mari = function(img) {

var car = img.expression('P800 * ( (1 / P495) - (1 / P705) )',

{"P495":img.select([30]),
"P705":img.select([75]),
"P800":img.select([97])}).multiply(10000).rename("CAR").set('system:time_start',img.get('system:time_start'));

var cire = img.expression(' ( (P800 / P705) - 1 )',

{"P705": img.select([75]),
"P800": img.select([97])}).multiply(10000).rename("CIRE").set('system:time_start',img.get('system:time_start'));


var mari = img.expression('P800 * ( (1 / P550) - (1 / P705) )',

{"P550":img.select([41]),
"P705":img.select([75]),
"P800":img.select([97])}).multiply(10000).rename("mARI").set('system:time_start',img.get('system:time_start'));

return ee.Image.cat(car,cire,mari).set('system:time_start',img.get('system:time_start'))};

exports.car_cire_mari = car_cire_mari;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var rescale = function(img){return img.divide(10000).set('system:time_start',img.get('system:time_start'))};
exports.rescale = rescale;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function norm(img){
  var bandNames = img.bandNames();
  // Compute min and max of the image
  var minDict = img.reduceRegion({reducer: ee.Reducer.min(), geometry: img.geometry().bounds(),
    scale: img.projection().nominalScale(), maxPixels: 1e9, bestEffort: true, tileScale: 16});
  var maxDict = img.reduceRegion({reducer: ee.Reducer.max(),geometry: img.geometry().bounds(),
    scale: img.projection().nominalScale(), maxPixels: 1e9, bestEffort: true, tileScale: 16});
  var mins = ee.Image.constant(minDict.values(bandNames));
  var maxs = ee.Image.constant(maxDict.values(bandNames));

  return img.subtract(mins).divide(maxs.subtract(mins))}

exports.norm = norm;

/////

// Principal Component Analysis (PCA)
// slightly modified from Ujaval Gandhi's End-to-End Google Earth Engine course (https://courses.spatialthoughts.com/end-to-end-gee-supplement.html#principal-component-analysis-pca)
// src: https://code.earthengine.google.co.in/?scriptPath=users%2Fujavalgandhi%2FEnd-to-End-GEE%3ASupplement%2FSupervised_Classification%2FPrincipal_Components_Analysis

function pca(img){
  var image = img.unmask();
  var scale = img.projection().nominalScale();
  var region = img.geometry().bounds();
  var bandNames = image.bandNames();
  // Mean center the data to enable a faster covariance reducer and an SD stretch of the principal components.
  var meanDict = image.reduceRegion({reducer:ee.Reducer.mean(),geometry:region,scale:scale,maxPixels: 1e13,tileScale: 16});
  var means = ee.Image.constant(meanDict.values(bandNames));
  var centered = image.subtract(means);
  var getNewBandNames = function(prefix) { // This helper function returns a list of new band names.
    var seq = ee.List.sequence(1, bandNames.length());
    return seq.map(function(b) {return ee.String(prefix).cat(ee.Number(b).int())})};
  
  // This function accepts mean centered imagery, a scale and a region in which to perform the analysis. It returns the PCs in the region as a new image.
  var getPrincipalComponents = function(centered, scale, region) {
    
    var arrays = centered.toArray(); // Collapse the bands of the image into a 1D array per pixel.
    
    // Compute the covariance of the bands within the region.
    var covar = arrays.reduceRegion({reducer: ee.Reducer.centeredCovariance(),geometry:region,scale: scale,maxPixels: 1e13,tileScale: 16});
    var covarArray = ee.Array(covar.get('array')); // Get the 'array' covariance result and cast to an array. This represents the band-to-band covariance within the region.
    var eigens = covarArray.eigen(); // Perform an eigen analysis and slice apart the values and vectors.
    var eigenValues = eigens.slice(1, 0, 1); // This is a P-length vector of Eigenvalues.
    
    // Compute Percentage Variance of each component. This will allow us to decide how many components capture most of the variance in the input.
    var eigenValuesList = eigenValues.toList().flatten();
    var total = eigenValuesList.reduce(ee.Reducer.sum());

    var percentageVariance = eigenValuesList.map(function(item) {
      var component = eigenValuesList.indexOf(item).add(1).format('%02d');
      var variance = ee.Number(item).divide(total).multiply(100).format('%.2f');
      return ee.List([component, variance])});
    
    var varianceDict = ee.Dictionary(percentageVariance.flatten()); // Create a dictionary that will be used to set properties on final image
    
    var eigenVectors = eigens.slice(1, 1); // This is a PxP matrix with eigenvectors in rows.
    
    var arrayImage = arrays.toArray(1); // Convert the array image to 2D arrays for matrix computations.

    var principalComponents = ee.Image(eigenVectors).matrixMultiply(arrayImage); // Left multiply the image array by the matrix of eigenvectors.

    // Turn the square roots of the Eigenvalues into a P-band image. Call abs() to turn negative eigenvalues to positive before taking the square root.
    var sdImage = ee.Image(eigenValues.abs().sqrt()).arrayProject([0]).arrayFlatten([getNewBandNames('sd')]);

    // Turn the PCs into a P-band image, normalized by SD.
    return principalComponents
      .arrayProject([0]) // Throw out an an unneeded dimension, [[]] -> [].
      .arrayFlatten([getNewBandNames('pc')]) // Make the one band array image a multi-band image, [] -> image.
      .divide(sdImage).set(varianceDict); // Normalize the PCs by their SDs.
  };
  var pcImage = getPrincipalComponents(centered, scale, region);
  return pcImage.mask(img.mask())}

exports.pca = pca;

/////

function variance_pca(img) {
print('Variance of Principal Components', pca(img).toDictionary());
}

exports.variance_pca = variance_pca;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ln1 = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:1})};
var ln2 = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:2})};

exports.ln1 = ln1;
exports.ln2 = ln2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sample axis titles for charts in Google Earth Engine

var haxis = {title: 'Wavelength (nm)'};
exports.haxis = haxis;

var vaxis = {title: 'Reflectance x 10,000'}; // Since we usually scale reflectance data for better data handling (i.e., 0 to 1 to 0 to 10,000)
exports.vaxis = vaxis;

var vaxis1 = {title: 'Reflectance x 100'}; // Since we usually scale reflectance data for better data handling (i.e., 0 to 1 to 0 to 10,000)
exports.vaxis1 = vaxis1;

var vaxis2 = {title: 'VI x 10,000'}; // We might also want to scale the VI data (i.e., from -1 to 1 to -10,000 to 10,000)
exports.vaxis2 = vaxis2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////