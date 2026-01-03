document.getElementById("generateBtn").addEventListener("click", () => {
  const htmlCode = document.getElementById("htmlCode").value;
  const cssCode = document.getElementById("cssCode").value;
  const jsCode = document.getElementById("jsCode").value;
  const siteName = document.getElementById("siteName").value || "MyWebsite";
  const domain = document.getElementById("domain").value || "example.com";

  // รวมโค้ดทั้งหมดเป็นไฟล์เว็บ
  const fullCode = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>${siteName}</title>
<link rel="icon" href="profile.png">
<style>
${cssCode}
</style>
</head>
<body>
${htmlCode}
<script>
${jsCode}
</script>
</body>
</html>
`;

  // สร้างไฟล์ Blob สำหรับดาวน์โหลด
  const blob = new Blob([fullCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${siteName}.html`;
  a.click();

  alert(`เว็บของคุณถูกสร้างแล้ว!\nชื่อเว็บ: ${siteName}\nโดเมน: ${domain}`);
});