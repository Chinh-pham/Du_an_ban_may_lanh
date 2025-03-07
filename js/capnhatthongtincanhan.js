document.addEventListener("DOMContentLoaded", function () {
    const provinceSelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");
    const streetInput = document.getElementById("street");
    const saveButton = document.getElementById("saveAddress");

    // API URLs
    const PROVINCE_API = "https://provinces.open-api.vn/api/";
    const DISTRICT_API = "https://provinces.open-api.vn/api/p/";
    const WARD_API = "https://provinces.open-api.vn/api/d/";

    // Load danh sách tỉnh/thành phố từ API
    async function loadProvinces() {
        try {
            const response = await fetch(PROVINCE_API);
            const data = await response.json();
            provinceSelect.innerHTML = `<option value="">Chọn Tỉnh/Thành phố</option>`;
            data.forEach(province => {
                let option = document.createElement("option");
                option.value = province.code;
                option.textContent = province.name;
                provinceSelect.appendChild(option);
            });
        } catch (error) {
            console.error("Lỗi khi tải tỉnh/thành phố:", error);
        }
    }

    // Khi chọn tỉnh/thành phố, lấy danh sách quận/huyện
    async function handleProvinceChange() {
        const provinceCode = provinceSelect.value;
        districtSelect.innerHTML = `<option value="">Chọn Quận/Huyện</option>`;
        wardSelect.innerHTML = `<option value="">Chọn Phường/Xã</option>`;

        if (!provinceCode) return;

        try {
            const response = await fetch(`${DISTRICT_API}${provinceCode}?depth=2`);
            const provinceData = await response.json();
            const districts = provinceData.districts || [];

            districts.forEach(district => {
                let option = document.createElement("option");
                option.value = district.code;
                option.textContent = district.name;
                districtSelect.appendChild(option);
            });
        } catch (error) {
            console.error("Lỗi khi tải quận/huyện:", error);
        }
    }

    // Khi chọn quận/huyện, lấy danh sách phường/xã
    async function handleDistrictChange() {
        const districtCode = districtSelect.value;
        wardSelect.innerHTML = `<option value="">Chọn Phường/Xã</option>`;

        if (!districtCode) return;

        try {
            const response = await fetch(`${WARD_API}${districtCode}?depth=2`);
            const districtData = await response.json();
            const wards = districtData.wards || [];

            wards.forEach(ward => {
                let option = document.createElement("option");
                option.value = ward.code;
                option.textContent = ward.name;
                wardSelect.appendChild(option);
            });
        } catch (error) {
            console.error("Lỗi khi tải phường/xã:", error);
        }
    }

    // Hàm lưu địa chỉ vào Local Storage
    function saveAddress() {
        const addressData = {
            city: provinceSelect.options[provinceSelect.selectedIndex].text,
            district: districtSelect.options[districtSelect.selectedIndex].text,
            ward: wardSelect.options[wardSelect.selectedIndex].text,
            street: streetInput.value
        };

        if (!addressData.city || !addressData.district || !addressData.ward || !addressData.street) {
            alert("Vui lòng nhập đầy đủ địa chỉ!");
            return;
        }

        localStorage.setItem("userAddress", JSON.stringify(addressData));
        alert("Địa chỉ đã được lưu!");
    }

    // Hàm tải địa chỉ từ Local Storage
    function loadAddress() {
        const savedAddress = localStorage.getItem("userAddress");
        if (savedAddress) {
            const addressData = JSON.parse(savedAddress);
            streetInput.value = addressData.street || "";

            loadProvinces().then(() => {
                const provinceOption = [...provinceSelect.options].find(opt => opt.text === addressData.city);
                if (provinceOption) {
                    provinceOption.selected = true;
                    handleProvinceChange().then(() => {
                        const districtOption = [...districtSelect.options].find(opt => opt.text === addressData.district);
                        if (districtOption) {
                            districtOption.selected = true;
                            handleDistrictChange().then(() => {
                                const wardOption = [...wardSelect.options].find(opt => opt.text === addressData.ward);
                                if (wardOption) wardOption.selected = true;
                            });
                        }
                    });
                }
            });
        }
    }

    // Gọi hàm load khi trang tải
    loadProvinces();
    loadAddress();

    // Gán sự kiện cho dropdown và nút lưu
    provinceSelect.addEventListener("change", handleProvinceChange);
    districtSelect.addEventListener("change", handleDistrictChange);
    saveButton.addEventListener("click", saveAddress);
});