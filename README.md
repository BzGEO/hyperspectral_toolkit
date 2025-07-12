# the Hyperspectral Data Toolkit

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15825295.svg)](https://doi.org/10.5281/zenodo.15825295)
[![Update](https://img.shields.io/github/last-commit/bzgeo/hyperspectral_toolkit?label=repo%20last%20updated&style=flat-square)](https://github.com/BzGEO/hyperspectral_toolkit/tree/main)
![Visitor badge](https://visitor-badge.laobi.icu/badge?page_id=bzgeo.hyperspectral_toolkit)

[![GEE badge](https://img.shields.io/badge/Google%20Earth%20Engine-4285F4.svg?style=for-the-badge&logo=Google-Earth-Engine&logoColor=white)](https://bit.ly/gee_repo_hyperspectral)

## Summary
This is a repository of [Google Earth Engine 🌎 (GEE)](https://code.earthengine.google.com) JavaScript code for tools for working with various hyperspectral *open* datasets from NASA (e.g., AVIRIS, EMIT, Hyperion, PACE OCI). One of the dependency packages included in this toolkit provides data on the hyperspectral wavelengths for NASA various spaceborne 🛰️ hyperspectral imagers, namely [EO-1 Hyperion](https://developers.google.com/earth-engine/datasets/catalog/EO1_HYPERION), the ISS [EMIT](https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2A_RFL), and [PACE OCI](https://pace.oceansciences.org/oci.htm) [whose products are *open data*]. Another dependency provides access specifically to PACE OCI land data (since the Hyperion and EMIT data are already available via the [GEE public data catalog](https://developers.google.com/earth-engine/datasets)). Aside from the dependencies, example scripts are provided to allow users to interact with the data, and the geographic and temporal scopes of those examples can be modified to meet users' needs. *Please note* that this repository is a successor, as well as an add-on to the **PACE OCI hyperspectral toolkit** available at https://github.com/bzgeo/pace_oci_toolkit.

## Functions
The scripts are divided into the following main functions: *(i) data discovery, (ii) data visualization, (iii) spectral signature visualization, (iv) data gap filling, (v) time series analysis, and (vi) image classification.*

## 📢 Add this repo to Google Earth Engine 📢
To add the code repository 💾 directly to your GEE account, use the following *bit.ly* 🔗: https://bit.ly/gee_repo_hyperspectral.

## Additional information
1. More info: **PACE OCI** hyperspectral 🛰️ data: https://pace.oceansciences.org/data_table.htm
2. More info: **ISS EMIT** hyperspectral 🛰️ data available in GEE: https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2A_RFL
3. More info: **EO-1 Hyperion** hyperspectral 🛰️ data available in GEE: https://developers.google.com/earth-engine/datasets/catalog/EO1_HYPERION
4. More info: **AVIRIS-NG** *airborne* 🛩️ hyperspectral data available in GEE: https://developers.google.com/earth-engine/datasets/catalog/projects_neon-prod-earthengine_assets_HSI_REFL_002

## Acknowledgements
This work builds off of the [PACE OCI hyperspectral toolkit](https://github.com/bzgeo/pace_oci_toolkit), which was [soft-launched](https://bit.ly/sbg_tim_2025_pace_tk) at the virtual [Technical Interchange Meeting](https://sbg.jpl.nasa.gov/news-events/sbg-sa-tim-2025) of NASA's [Surface Biology and Geology (SBG)](https://sbg.jpl.nasa.gov/) mission. This work is being led by researchers from the [Lab for Applied Science](https://www.uah.edu/essc/laboratory-for-applied-science) of the [Earth System Science Center](https://www.uah.edu/essc) of the [University of Alabama in Huntsville](https://www.uah.edu/) and has been supported by [NASA](https://www.nasa.gov) Earth Action / NASA [Marshall Space Flight Center](https://www.nasa.gov/marshall/). The initial work was being done in the context of an [Early Adopters project](https://pace.oceansciences.org/people_ea.htm?id=127) for PACE. Kudos are due to Dr. Morgaine McKibben (NASA / SSAI), Skye Caplan (NASA / SSAI), and Dr. K. Fred Huemmrich (NASA / UMBC) of the collective PACE team, [Dr. Africa-Flores-Anderson](https://github.com/africaf) (NASA) of the SBG team, and to [Kelsey Herndon](https://github.com/herndk1) (NASA / UAH), [Eric Anderson](https://github.com/andersoner) (NASA), Dr. Kevin Horn (NASA), Dr. Ashutosh Limaye (NASA), and Dan Irwin (NASA) of NASA MSFC.

## Citation

If this toolkit is used in publications, presentations, or other venues, please cite 📝 the following:

Cherrington, E. (2025). Hyperspectral Data Toolkit (Version 1.0.0.1) [Computer software]. https://doi.org/10.5281/zenodo.15825295

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15825295.svg)](https://doi.org/10.5281/zenodo.15825295)

## Contact information

If you have any questions, feel free to contact Emil Cherrington by :envelope_with_arrow: email: **emil.cherrington [at] uah.edu**.
