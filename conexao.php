<?php
$conn = pg_connect("host=db.xxxxx.supabase.co port=5432 dbname=postgres user=postgres password=SUA_SENHA");

if (!$conn) {
    echo "Erro na conexão";
}
?>
